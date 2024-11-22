<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user = new UserOther($conn);
// get $_GET data
// check if userid is in the url e.g. /user/1
$error = [];
$returnData = [];
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (array_key_exists("userid", $_GET)) {
    // get task id from query string
    $user->user_aid = $_GET['userid'];
    //check to see if task id in query string is not empty and is number, if not return json error
    checkId($user->user_aid);
    $query = checkReadById($user);
    http_response_code(200);
    getQueriedData($query);
}

// if request is a GET e.g. /user
if (empty($_GET)) {
    checkPayload($data);
    $user->role_code = $data['role_code'];
    $query = checkReadAll($user);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
