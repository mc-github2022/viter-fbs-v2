<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_overview = new ImmersionOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("immersion_overviewid", $_GET)) {
  $immersion_overview->immersion_overview_aid = $_GET['immersion_overviewid'];
  checkId($immersion_overview->immersion_overview_aid);
  $query = checkReadAll($immersion_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($immersion_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
