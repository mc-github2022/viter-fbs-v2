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
  // check data
  checkPayload($data);
  // get data

  $immersion_services->immersion_services_aid = $_GET['immersion_servicesid'];
  $immersion_services->immersion_services_title = $data["immersion_services_title"];
  $immersion_services->immersion_services_subtitle_a = $data["immersion_services_subtitle_a"];
  $immersion_services->immersion_services_subtitle_b = $data["immersion_services_subtitle_b"];
  $immersion_services->immersion_services_list = $data["immersion_services_list"];
  $immersion_services->immersion_services_icon = $data["immersion_services_icon"];
  $immersion_services->immersion_services_datetime = date("Y-m-d H:i:s");

  // update
  $query = checkUpdate($immersion_services);
  returnSuccess($immersion_services, "immersion services update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
