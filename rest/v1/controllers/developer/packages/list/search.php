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

    $packages_list->packages_list_search = $data["searchValue"];
    // get data
    if ($data["isFilter"] == true) {
        $category_id = $data["category_id"];
        $packages_list->packages_list_is_active = $data["is_active"];



        // Category + Status + Search 
        if (is_numeric($category_id) && $packages_list->packages_list_is_active !== "" && $packages_list->packages_list_search !== "") {
            $packages_list->packages_list_category_name_id = $category_id;
            $query = checkFilterByCategoryAndStatusAndSearch($packages_list);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // Category + Status
        if (is_numeric($category_id) && ($packages_list->packages_list_is_active !== "" && $packages_list->packages_list_is_active !== "all")) {
            $packages_list->packages_list_category_name_id = $category_id;
            $query = checkFilterByCategoryAndStatus($packages_list);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // Category + Search
        if (is_numeric($category_id) && $packages_list->packages_list_search !== "") {
            $packages_list->packages_list_category_name_id = $category_id;
            $query = checkFilterByCategoryAndSearch($packages_list);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // Status + Search
        if ($packages_list->packages_list_is_active !== "" && $packages_list->packages_list_search !== "") {
            $query = checkFilterByStatusAndSearch($packages_list);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // Category only
        if (is_numeric($category_id)) {
            $packages_list->packages_list_category_name_id = $category_id;
            $query = checkFilterByCategory($packages_list);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // Status only
        if ($packages_list->packages_list_is_active !== "") {
            $query = checkFilterByStatus($packages_list);
            http_response_code(200);
            getQueriedData($query);
            return;
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
