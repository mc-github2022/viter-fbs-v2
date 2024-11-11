<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/lcss-batches/LcssBatches.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lcss_batch = new LcssBatches($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        // get task id from query string
        $lcss_batch->lcss_batch_start = $_GET['start'];
        $lcss_batch->lcss_batch_total = 11;
        //check to see if task id in query string is not empty and is number, if not return json error
        checkLimitId($lcss_batch->lcss_batch_start, $lcss_batch->lcss_batch_total);

        $query = checkReadLimit($lcss_batch);
        $total_result = checkReadAll($lcss_batch);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $lcss_batch->lcss_batch_total,
            $lcss_batch->lcss_batch_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
