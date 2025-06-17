<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_overview = new MarketingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("marketing_overviewid", $_GET)) {
  $marketing_overview->marketing_overview_aid = $_GET['marketing_overviewid'];
  checkId($marketing_overview->marketing_overview_aid);
  $query = checkReadAll($marketing_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($marketing_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
