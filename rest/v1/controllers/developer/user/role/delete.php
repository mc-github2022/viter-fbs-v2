<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$role = new Role($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("roleId", $_GET)) {
  // get data
  $role->role_aid = $_GET['roleId'];
  checkId($role->role_aid);

  $query = checkDelete($role);

  returnSuccess($role, "role", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
