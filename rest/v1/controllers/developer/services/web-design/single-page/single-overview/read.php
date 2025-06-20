<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_overview = new SinglepageOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("singlepage_overviewid", $_GET)) {
  $singlepage_overview->singlepage_overview_aid = $_GET['singlepage_overviewid'];
  checkId($singlepage_overview->singlepage_overview_aid);
  $query = checkReadAll($singlepage_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($singlepage_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
