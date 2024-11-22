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
  // get data
  $user_role->user_role_aid = $_GET['roleId'];
  checkId($user_role->user_role_aid);

  $query = checkDelete($user_role);

  returnSuccess($user_role, "role", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
