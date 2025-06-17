<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_services_title = new MarketingServicesTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("marketing_services_titleid", $_GET)) {
  $marketing_services_title->marketing_services_title_aid = $_GET['marketing_services_titleid'];
  checkId($marketing_services_title->marketing_services_title_aid);
  $query = checkReadAll($marketing_services_title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($marketing_services_title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
