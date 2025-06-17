<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_services_list = new BusinessServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("business_services_listid", $_GET)) {
  $business_services_list->business_services_list_aid = $_GET['business_services_listid'];
  checkId($business_services_list->business_services_list_aid);
  $query = checkReadAll($business_services_list);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($business_services_list);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
