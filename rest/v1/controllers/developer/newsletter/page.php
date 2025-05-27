<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/newsletter/Newsletter.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$newsletter = new Newsletter($conn);
// validate api key

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $newsletter->newsletter_start = $_GET['start'];
        $newsletter->newsletter_total = 15;

        checkLimitId($newsletter->newsletter_start, $newsletter->newsletter_total);

        $query = checkReadLimit($newsletter);
        $total_result = checkReadAll($newsletter);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $newsletter->newsletter_total,
            $newsletter->newsletter_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
