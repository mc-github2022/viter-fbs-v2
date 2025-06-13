<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_services = new ContinuingServices($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("continuing_servicesid", $_GET)) {
  $continuing_services->continuing_services_aid = $_GET['continuing_servicesid'];
  checkId($continuing_services->continuing_services_aid);
  $query = checkReadAll($continuing_services);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($continuing_services);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
