<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other_role = new Role($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$user_other_role->user_other_role_is_active = 1;
$user_other_role->user_other_role_name = checkIndex($data, "user_other_role_name");
$user_other_role->user_other_role_description = $data["user_other_role_description"];
$user_other_role->user_other_role_code = $data["user_other_role_code"];
$user_other_role->user_other_role_created = date("Y-m-d H:i:s");
$user_other_role->user_other_role_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
isNameExist($user_other_role, $user_other_role->user_other_role_name);

$query = checkCreate($user_other_role);

returnSuccess($user_other_role, "role", $query);
