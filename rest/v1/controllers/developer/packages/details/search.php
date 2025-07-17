<?php
// set http header 
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/packages/details/PackagesDetails.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_details = new PackagesDetails($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    $packages_details->packages_details_search = $data["searchValue"];

    if ($data["isFilter"] == true) {
        $packages_details->packages_details_is_active = $data["is_active"];
        $list_id = $data["list_id"];


        // status + list + search
        if (is_numeric($list_id) && $packages_details->packages_details_is_active !== "" && $packages_details->packages_details_search !== "") {
            $packages_details->packages_details_list_id = $list_id;
            $query = checkFilterByStatusAndListAndSearch($packages_details);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // status + list
        if (is_numeric($list_id) && ($packages_details->packages_details_is_active !== "" && $packages_details->packages_details_is_active !== "all")) {
            $packages_details->packages_details_list_id = $list_id;
            $query = checkFilterByStatusAndList($packages_details);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // list + search
        if (is_numeric($list_id) && $packages_details->packages_details_search !== "") {
            $packages_details->packages_details_list_id = $list_id;
            $query = checkFilterByListAndSearch($packages_details);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // status + search
        if ($packages_details->packages_details_is_active !== "" && $packages_details->packages_details_search !== "") {
            $query = checkFilterByStatusAndSearch($packages_details);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // list only
        if (is_numeric($list_id)) {
            $packages_details->packages_details_list_id = $list_id;
            $query = checkFilterByList($packages_details);
            http_response_code(200);
            getQueriedData($query);
            return;
        }

        // status only
        if ($packages_details->packages_details_is_active !== "") {
            $query = checkFilterByStatus($packages_details);
            http_response_code(200);
            getQueriedData($query);
            return;
        }
    }

    // if search only
    checkKeyword($packages_details->packages_details_search);
    $query = checkSearch($packages_details);
    http_response_code(200);    
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
