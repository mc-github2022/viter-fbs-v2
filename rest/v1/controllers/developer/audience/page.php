<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/audience/Audience.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$audience = new Audience($conn);
// validate api key

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $audience->audience_start = $_GET['start'];
        $audience->audience_total = 15;

        checkLimitId($audience->audience_start, $audience->audience_total);

        $query = checkReadLimit($audience);
        $total_result = checkReadAll($audience);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $audience->audience_total,
            $audience->audience_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
