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
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    // get data
    $packages_category->packages_category_search = $data["searchValue"];    // get data 
    // if search only
    checkKeyword($packages_category->packages_category_search);
    $query = checkSearch($packages_category);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
