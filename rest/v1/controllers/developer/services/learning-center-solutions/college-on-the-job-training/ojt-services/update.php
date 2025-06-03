<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_services = new OjtServices($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ojt_servicesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $ojt_services->ojt_services_aid = $_GET['ojt_servicesid'];
  $ojt_services->ojt_services_title = $data["ojt_services_title"];
  $ojt_services->ojt_services_subtitle_a = $data["ojt_services_subtitle_a"];
  $ojt_services->ojt_services_subtitle_b = $data["ojt_services_subtitle_b"];
  $ojt_services->ojt_services_list = $data["ojt_services_list"];
  $ojt_services->ojt_services_icon = $data["ojt_services_icon"];
  $ojt_services->ojt_services_datetime = date("Y-m-d H:i:s");

  // update
  $query = checkUpdate($ojt_services);
  returnSuccess($ojt_services, "ojt services update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
