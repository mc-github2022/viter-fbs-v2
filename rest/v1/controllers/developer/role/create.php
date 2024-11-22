<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_role = new Role($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$user_role->user_role_is_active = 1;
$user_role->user_role_name = checkIndex($data, "user_role_name");
$user_role->user_role_description = $data["user_role_description"];
$user_role->user_role_code = $data["user_role_code"];
$user_role->user_role_created = date("Y-m-d H:i:s");
$user_role->user_role_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
isNameExist($user_role, $user_role->user_role_name);

$query = checkCreate($user_role);

returnSuccess($user_role, "role", $query);
