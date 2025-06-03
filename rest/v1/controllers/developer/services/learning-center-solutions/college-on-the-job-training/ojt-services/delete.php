<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_services = new OjtServices($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("ojt_servicesid", $_GET)) {
  // get data
  checkPayload($data);

  $ojt_services->ojt_services_aid = $_GET['ojt_servicesid'];

  checkId($ojt_services->ojt_services_aid);
  $query = checkDelete($ojt_services);

  returnSuccess($ojt_services, "ojt banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
