<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_overview = new WebsiteOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("website_overviewid", $_GET)) {
  $website_overview->website_overview_aid = $_GET['website_overviewid'];
  checkId($website_overview->website_overview_aid);
  $query = checkReadAll($website_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($website_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
