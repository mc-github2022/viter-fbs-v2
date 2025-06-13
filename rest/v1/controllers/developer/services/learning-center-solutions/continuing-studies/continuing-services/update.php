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
  // check data
  checkPayload($data);
  // get data

  $continuing_services->continuing_services_aid = $_GET['continuing_servicesid'];
  $continuing_services->continuing_services_title = $data["continuing_services_title"];
  $continuing_services->continuing_services_subtitle_a = $data["continuing_services_subtitle_a"];
  $continuing_services->continuing_services_subtitle_b = $data["continuing_services_subtitle_b"];
  $continuing_services->continuing_services_list = $data["continuing_services_list"];
  $continuing_services->continuing_services_icon = $data["continuing_services_icon"];
  $continuing_services->continuing_services_prerequisite = $data["continuing_services_prerequisite"];
  $continuing_services->continuing_services_datetime = date("Y-m-d H:i:s");

  // update
  $query = checkUpdate($continuing_services);
  returnSuccess($continuing_services, "continuing services update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
