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
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    // get data
    $newsletter->newsletter_search = $data["searchValue"];    // get data 
    // if search only
    checkKeyword($newsletter->newsletter_search);
    $query = checkSearch($newsletter);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
