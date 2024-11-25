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
  // check data
  checkPayload($data);
  // get data
  $role->role_aid = $_GET['roleId'];
  $role->role_name = checkIndex($data, "role_name");
  $role->role_description = $data["role_description"];
  $role->role_code = $data["role_code"];
  $role->role_datetime = date("Y-m-d H:i:s");
  checkId($role->role_aid);


  //checks current data to avoid same entries from being updated
  $role_name_old = checkIndex($data, 'role_name_old');
  compareName($role, $role_name_old, $role->role_name);

  // update
  $query = checkUpdate($role);
  returnSuccess($role, "role", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
