<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_services_title = new SocialMediaServicesTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("social_services_titleid", $_GET)) {
  $social_services_title->social_services_title_aid = $_GET['social_services_titleid'];
  checkId($social_services_title->social_services_title_aid);
  $query = checkReadAll($social_services_title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($social_services_title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
