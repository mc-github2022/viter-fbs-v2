<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_overview = new ContinuingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("continuing_overviewid", $_GET)) {
  $continuing_overview->continuing_overview_aid = $_GET['continuing_overviewid'];
  checkId($continuing_overview->continuing_overview_aid);
  $query = checkReadAll($continuing_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($continuing_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
