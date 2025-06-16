<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_services_title = new AdministrativeServicesTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("administrative_services_titleid", $_GET)) {
  $administrative_services_title->administrative_services_title_aid = $_GET['administrative_services_titleid'];
  checkId($administrative_services_title->administrative_services_title_aid);
  $query = checkReadAll($administrative_services_title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($administrative_services_title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
