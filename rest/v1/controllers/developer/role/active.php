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
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("roleId", $_GET)) {
        // check data
        checkPayload($data);

        $user_role->user_role_aid = $_GET['roleId'];
        $user_role->user_role_is_active = trim($data["isActive"]);
        $user_role->user_role_datetime = date("Y-m-d H:i:s");

        checkId($user_role->user_role_aid);

        $query = checkActive($user_role);
        http_response_code(200);
        returnSuccess($user_role, "role", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
