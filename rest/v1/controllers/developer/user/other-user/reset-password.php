<?php
// set http header
require '../../../../core/header.php';
require '../../../../core/Encryption.php';
// use needed functions
require '../../../../core/functions.php';
// use notification template
require '../../../../notification/reset-password.php';
// use needed classes
require '../../../../models/developer/users/user-other/UserOther.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user = new UserOther($conn);
$encrypt = new Encryption();
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);

    $user->user_other_key = $encrypt->doHash(rand());
    $user->user_other_datetime = date("Y-m-d H:i:s");
    $user->user_other_email = trim($data["email"]);
    $password_link = "/create-password";

    $query = $user->readLogin();
    if ($query->rowCount() == 0) {
        returnError("Invalid email. Please use a registered one.");
    }


    if ($query->rowCount() > 0) {
        $mailData = sendEmail(
            $password_link,
            $user->user_other_email,
            $user->user_other_key
        );
    }

    if ($mailData["mail_success"] == true) {
        $query = checkResetPassword($user);
        http_response_code(200);
        returnSuccess($user, "User Other", $query);
    }

    returnError($mailData["error"]);
    checkEndpoint();
}

checkAccess();
