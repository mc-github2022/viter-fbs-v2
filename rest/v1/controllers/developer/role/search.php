<?php
// set http header 
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/user/Role.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_role = new Role($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    // get data
    $user_role->user_role_search = $data["searchValue"];    // get data 
    // if search only
    checkKeyword($user_role->user_role_search);
    $query = checkSearch($user_role);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
