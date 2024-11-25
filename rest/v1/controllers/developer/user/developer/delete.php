<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserDeveloper($conn);

if (array_key_exists("userdeveloperid", $_GET)) {
    $user_system->user_developer_aid = $_GET['userdeveloperid'];

    checkId($user_system->user_developer_aid);
    // delete
    $query = checkDelete($user_system);
    returnSuccess($user_system, "User", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
