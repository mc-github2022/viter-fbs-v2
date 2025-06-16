<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_overview = new BusinessOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("business_overviewid", $_GET)) {
  $business_overview->business_overview_aid = $_GET['business_overviewid'];
  checkId($business_overview->business_overview_aid);
  $query = checkReadAll($business_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($business_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
