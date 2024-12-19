<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/subscribe/Subscribe.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $subscribe->subscriber_start = $_GET['start'];
        $subscribe->subscriber_total = 15;

        checkLimitId($subscribe->subscriber_start, $subscribe->subscriber_total);

        $query = checkReadLimit($subscribe);
        $total_result = checkReadAll($subscribe);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $subscribe->subscriber_total,
            $subscribe->subscriber_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
