<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_overview = new AdministrativeOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("administrative_overviewid", $_GET)) {
  $administrative_overview->administrative_overview_aid = $_GET['administrative_overviewid'];
  checkId($administrative_overview->administrative_overview_aid);
  $query = checkReadAll($administrative_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($administrative_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
