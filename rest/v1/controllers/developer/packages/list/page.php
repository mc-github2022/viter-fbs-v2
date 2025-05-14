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
// validate api key

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $packages_list->packages_list_start = $_GET['start'];
        $packages_list->packages_list_total = 15;

        checkLimitId($packages_list->packages_list_start, $packages_list->packages_list_total);

        $query = checkReadLimit($packages_list);
        $total_result = checkReadAll($packages_list);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $packages_list->packages_list_total,
            $packages_list->packages_list_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
