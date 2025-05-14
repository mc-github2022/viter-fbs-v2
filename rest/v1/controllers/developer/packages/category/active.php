<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/packages/category/PackagesCategory.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_category = new PackagesCategory($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("packages_categoryId", $_GET)) {
        // check data
        checkPayload($data);

        $packages_category->packages_category_aid = $_GET['packages_categoryId'];
        $packages_category->packages_category_is_active = trim($data["isActive"]);
        $packages_category->packages_category_datetime = date("Y-m-d H:i:s");

        checkId($packages_category->packages_category_aid);

        $query = checkActive($packages_category);
        http_response_code(200);
        returnSuccess($packages_category, "packages_category", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
