<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/users/user-other/UserOther.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user = new UserOther($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    if (array_key_exists("start", $_GET)) {
        // get data
        $user->user_other_start = $_GET['start'];
        $user->user_other_total = 10;

        checkLimitId($user->user_other_start, $user->user_other_total);
        $query = checkReadLimit($user);
        $total_result = checkReadAll($user);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $user->user_other_total,
            $user->user_other_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
