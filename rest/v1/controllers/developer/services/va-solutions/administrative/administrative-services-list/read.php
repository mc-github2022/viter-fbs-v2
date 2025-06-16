<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_services_list = new AdministrativeServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("administrative_services_listid", $_GET)) {
  $administrative_services_list->administrative_services_list_aid = $_GET['administrative_services_listid'];
  checkId($administrative_services_list->administrative_services_list_aid);
  $query = checkReadAll($administrative_services_list);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($administrative_services_list);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
