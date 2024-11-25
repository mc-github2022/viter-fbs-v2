<?php
// set http header 
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/users/developer/UserDeveloper.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserDeveloper($conn);
$response = new Response();
$error = [];
$returnData = [];
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("userdeveloperkey", $_GET)) {
        // get data
        $user_system->user_developer_key = $_GET['userdeveloperkey'];
        $user_system->user_developer_datetime = date("Y-m-d H:i:s");

        // check if email exist
        $readKey = $user_system->readKeyChangeEmail();

        // check if reload or key empty 
        $newCount = 0;

        // update if first load
        if ($readKey->rowCount() > 0) {
            $row = $readKey->fetch(PDO::FETCH_ASSOC);
            extract($row);
            $user_system->user_developer_email = $user_developer_email_new;
            // update
            $query = checkUpdateEmailForUser($user_system);
            returnSuccess($user_system, "System user", $query);
        }

        $returnData["count"] = $newCount;
        $returnData["success"] = true;
        $returnData["added"] = $newCount;
        $response->setData($returnData);
        $response->send();
        exit;
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
