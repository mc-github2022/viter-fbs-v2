<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_services_title = new BusinessServicesTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("business_services_titleid", $_GET)) {
  $business_services_title->business_services_title_aid = $_GET['business_services_titleid'];
  checkId($business_services_title->business_services_title_aid);
  $query = checkReadAll($business_services_title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($business_services_title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
