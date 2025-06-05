<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_services = new ImmersionServices($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("immersion_servicesid", $_GET)) {
  $immersion_services->immersion_services_aid = $_GET['immersion_servicesid'];
  checkId($immersion_services->immersion_services_aid);
  $query = checkReadAll($immersion_services);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($immersion_services);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
