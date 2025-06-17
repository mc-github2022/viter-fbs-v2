<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_services_list = new MarketingServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("marketing_services_listid", $_GET)) {
  $marketing_services_list->marketing_services_list_aid = $_GET['marketing_services_listid'];
  checkId($marketing_services_list->marketing_services_list_aid);
  $query = checkReadAll($marketing_services_list);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($marketing_services_list);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
