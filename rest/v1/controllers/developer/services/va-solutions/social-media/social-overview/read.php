<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_overview = new SocialMediaOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("social_overviewid", $_GET)) {
  $social_overview->social_overview_aid = $_GET['social_overviewid'];
  checkId($social_overview->social_overview_aid);
  $query = checkReadAll($social_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($social_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
