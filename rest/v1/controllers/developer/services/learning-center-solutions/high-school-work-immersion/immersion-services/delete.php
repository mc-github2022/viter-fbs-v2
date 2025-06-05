<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_services = new ImmersionServices($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("immersion_servicesid", $_GET)) {
  // get data
  checkPayload($data);

  $immersion_services->immersion_services_aid = $_GET['immersion_servicesid'];

  checkId($immersion_services->immersion_services_aid);
  $query = checkDelete($immersion_services);

  returnSuccess($immersion_services, "immersion services", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
