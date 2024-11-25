<?php
// use notification template
require '../../../../notification/verify-email.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserDeveloper($conn);
$encrypt = new Encryption();

if (array_key_exists("userdeveloperid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $user_system->user_developer_aid = $_GET['userdeveloperid'];
    $user_system->user_developer_fname = trim($data["user_developer_fname"]);
    $user_system->user_developer_lname = trim($data["user_developer_lname"]);
    $user_system->user_developer_email = trim($data["user_developer_email"]);
    $user_system->user_developer_datetime = date("Y-m-d H:i:s");
    $user_developer_email_old = strtolower($data["user_developer_email_old"]);
    $user_system->user_developer_key = $encrypt->doHash(rand());
    $link = "/developer/verify-email";

    checkId($user_system->user_developer_aid);
    // check name
    compareEmail($user_system, $user_developer_email_old, $user_system->user_developer_email);
    // update
    if ($user_system->user_developer_email != $user_developer_email_old) {
        checkUpdateUserKeyAndNewEmail($user_system);
        sendEmailVerify(
            $link,
            $user_system->user_developer_fname,
            $user_developer_email_old,
            $user_system->user_developer_email,
            $user_system->user_developer_key
        );
    }
    $query = checkUpdate($user_system);
    returnSuccess($user_system, "User", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
