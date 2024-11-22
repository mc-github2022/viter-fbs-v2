<?php
// // use notification template
// require '../../../../notification/verify-email.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user = new UserOther($conn);
$encrypt = new Encryption();

if (array_key_exists("userid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $user->user_other_aid = $_GET['userid'];
    $user->user_other_fname = trim($data["user_other_fname"]);
    $user->user_other_lname = trim($data["user_other_lname"]);
    $user->user_other_email = trim($data["user_other_email"]);
    $user->user_other_role_id = trim($data["user_other_role_id"]);
    $user->user_other_datetime = date("Y-m-d H:i:s");
    $user_other_email_old = strtolower($data["user_other_email_old"]);
    $user->user_other_key = $encrypt->doHash(rand());
    $link = "/verify-email";

    checkId($user->user_other_aid);
    // check name
    compareEmail($user, $user_other_email_old, $user->user_other_email);
    // // update
    // if ($user->user_other_email != $user_other_email_old) {
    //     checkUpdateUserKeyAndNewEmail($user);
    //     sendEmailVerify(
    //         $link,
    //         $user->user_other_fname,
    //         $user_other_email_old,
    //         $user->user_other_email,
    //         $user->user_other_key
    //     );
    // }
    $query = checkUpdate($user);
    returnSuccess($user, "User", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
