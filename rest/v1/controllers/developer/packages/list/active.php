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
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("packages_listId", $_GET)) {
        // check data
        checkPayload($data);

        $packages_list->packages_list_aid = $_GET['packages_listId'];
        $packages_list->packages_list_is_active = trim($data["isActive"]);
        $packages_list->packages_list_datetime = date("Y-m-d H:i:s");

        checkId($packages_list->packages_list_aid);

        $query = checkActive($packages_list);
        http_response_code(200);
        returnSuccess($packages_list, "packages_list", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
