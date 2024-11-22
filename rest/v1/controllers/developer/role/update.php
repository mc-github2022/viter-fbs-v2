<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_role = new Role($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("roleId", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $user_role->user_role_aid = $_GET['roleId'];
  $user_role->user_role_name = checkIndex($data, "user_role_name");
  $user_role->user_role_description = $data["user_role_description"];
  $user_role->user_role_code = $data["user_role_code"];
  $user_role->user_role_datetime = date("Y-m-d H:i:s");
  checkId($user_role->user_role_aid);


  //checks current data to avoid same entries from being updated
  $user_role_name_old = checkIndex($data, 'user_role_name_old');
  compareName($user_role, $user_role_name_old, $user_role->user_role_name);

  // update
  $query = checkUpdate($user_role);
  returnSuccess($user_role, "role", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
