<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_overview = new HrisOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("hris_overviewid", $_GET)) {
  $hris_overview->hris_overview_aid = $_GET['hris_overviewid'];
  checkId($hris_overview->hris_overview_aid);
  $query = checkReadAll($hris_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($hris_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
