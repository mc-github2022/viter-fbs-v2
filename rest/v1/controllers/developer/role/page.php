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
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $user_role->user_role_start = $_GET['start'];
        $user_role->user_role_total = 15;

        checkLimitId($user_role->user_role_start, $user_role->user_role_total);

        $query = checkReadLimit($user_role);
        $total_result = checkReadAll($user_role);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $user_role->user_role_total,
            $user_role->user_role_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
