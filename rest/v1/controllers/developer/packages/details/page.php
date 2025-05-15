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
// validate api key

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $packages_details->packages_details_start = $_GET['start'];
        $packages_details->packages_details_total = 15;

        checkLimitId($packages_details->packages_details_start, $packages_details->packages_details_total);

        $query = checkReadLimit($packages_details);
        $total_result = checkReadAll($packages_details);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $packages_details->packages_details_total,
            $packages_details->packages_details_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
