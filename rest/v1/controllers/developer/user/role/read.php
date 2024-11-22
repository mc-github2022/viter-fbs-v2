<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other_role = new Role($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("roleId", $_GET)) {
  $user_other_role->user_other_role_aid = $_GET['roleId'];
  checkId($user_other_role->user_other_role_aid);
  $query = checkReadAll($user_other_role);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($user_other_role);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
