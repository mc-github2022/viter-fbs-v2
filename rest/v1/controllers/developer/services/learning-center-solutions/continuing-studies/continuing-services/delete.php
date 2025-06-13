<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_services = new ContinuingServices($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("continuing_servicesid", $_GET)) {
  // get data
  checkPayload($data);

  $continuing_services->continuing_services_aid = $_GET['continuing_servicesid'];

  checkId($continuing_services->continuing_services_aid);
  $query = checkDelete($continuing_services);

  returnSuccess($continuing_services, "continuing services", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
