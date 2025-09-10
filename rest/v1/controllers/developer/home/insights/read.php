<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_insights = new Insights($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("home_insightsid", $_GET)) {
  $home_insights->home_insights_aid = $_GET['home_insightsid'];
  checkId($home_insights->home_insights_aid);
  $query = checkReadById($home_insights);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($home_insights);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
