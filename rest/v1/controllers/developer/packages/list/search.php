<?php
// set http header 
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/packages/list/PackagesList.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_list = new PackagesList($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    // get data
    $packages_list->packages_list_search = $data["searchValue"];    // get data

    // get data
    if ($data["isFilter"] == true) {
        $category_id = $data["category_id"];
        $packages_list->packages_list_is_active = $data["is_active"];

        if (is_numeric($category_id)) {
            // filter category
            $packages_list->packages_list_category_name_id = $category_id;
            $query = checkFilterByCategory($packages_list);
            http_response_code(200);
            getQueriedData($query);
        }

        if (is_numeric($category_id) != "") {
            // filter category
            $packages_list->packages_list_is_active = checkIndex($data, "is_active");
            $query = checkFilterByCategoryAndStatus($packages_list);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter with search
        if ($packages_list->packages_list_search != "") {
            checkKeyword($packages_list->packages_list_search);
            $packages_list->packages_list_is_active = checkIndex($data, "is_active");
            $query = checkFilterByStatusAndSearch($packages_list);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter category with search
        if ($packages_list->packages_list_search != "") {
            checkKeyword($packages_list->packages_list_search);
            $packages_list->packages_list_category_name_id = checkIndex($data, "category_id");
            $query = checkFilterByCategoryAndSearch($packages_list);
            http_response_code(200);
            getQueriedData($query);
        }

        if ($packages_list->packages_list_is_active != "") {
            // if filter only
            $query = checkFilterByStatus($packages_list);
            http_response_code(200);
            getQueriedData($query);
        }
    }

    // if search only
    checkKeyword($packages_list->packages_list_search);
    $query = checkSearch($packages_list);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
