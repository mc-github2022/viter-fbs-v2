<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$services = new HomeServices($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("home_servicesid", $_GET)) {
  $services->services_aid = $_GET['home_servicesid'];
  checkId($services->services_aid);
  $query = checkReadAll($services);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($services);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
