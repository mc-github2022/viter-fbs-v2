<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_profile = new WorkCompanyProfile($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("work_profileid", $_GET)) {
  $work_profile->work_profile_aid = $_GET['work_profileid'];
  checkId($work_profile->work_profile_aid);
  $query = checkReadAll($work_profile);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($work_profile);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
