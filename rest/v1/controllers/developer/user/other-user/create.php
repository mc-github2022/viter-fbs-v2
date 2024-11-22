<?php
// use notification template
require '../../../../notification/verify-account.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user = new UserOther($conn);
$encrypt = new Encryption();
// get should not be present
if (array_key_exists("userid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$user->user_other_fname = trim($data["user_other_fname"]);
$user->user_other_lname = trim($data["user_other_lname"]);
$user->user_other_email = trim($data["user_other_email"]);
$user->user_other_role_id = trim($data["user_other_role_id"]);
$user->user_other_key = $encrypt->doHash(rand());
$user->user_other_is_active = 1;
$user->user_other_created = date("Y-m-d H:i:s");
$user->user_other_datetime = date("Y-m-d H:i:s");
$password_link = "/create-password";
// check email 
isEmailExist($user, $user->user_other_email);
$query = checkCreate($user);

if ($query->rowCount() > 0) {
    $mailData = sendEmail(
        $password_link,
        $user->user_other_fname,
        $user->user_other_email,
        $user->user_other_key
    );
} else {
    $user->user_other_aid = $user->lastInsertedId;
    $query = checkDelete($user);
}
// create
if ($mailData["mail_success"] == true) {
    returnSuccess($user, "User", $query);
}

returnError($mailData["error"]);
