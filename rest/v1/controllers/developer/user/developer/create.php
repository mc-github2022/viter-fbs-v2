<?php
// use notification template
require '../../../../notification/verify-account.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserDeveloper($conn);
$encrypt = new Encryption();
// get should not be present
if (array_key_exists("userdeveloperid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$user_system->user_developer_fname = trim($data["user_developer_fname"]);
$user_system->user_developer_lname = trim($data["user_developer_lname"]);
$user_system->user_developer_is_active = 1;
$user_system->user_developer_email = trim($data["user_developer_email"]);
$user_system->user_developer_role_id = trim($data["user_developer_role_id"]);
$user_system->user_developer_key = $encrypt->doHash(rand());
$user_system->user_developer_created = date("Y-m-d H:i:s");
$user_system->user_developer_datetime = date("Y-m-d H:i:s");
$password_link = "/developer/create-password";
// check email
isEmailExist($user_system, $user_system->user_developer_email);
// send email notification
sendEmail(
    $password_link,
    $user_system->user_developer_fname,
    $user_system->user_developer_email,
    $user_system->user_developer_key
);
// create
$query = checkCreate($user_system);
returnSuccess($user_system, "User system", $query);
