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
// validate api key

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $packages_category->packages_category_start = $_GET['start'];
        $packages_category->packages_category_total = 15;

        checkLimitId($packages_category->packages_category_start, $packages_category->packages_category_total);

        $query = checkReadLimit($packages_category);
        $total_result = checkReadAll($packages_category);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $packages_category->packages_category_total,
            $packages_category->packages_category_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
