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
  // check data
  checkPayload($data);
  // get data

  $isUpdateHomeServices = $data['isUpdateHomeServices'];


  if ($isUpdateHomeServices == "servicesTitleUpdate") {
    $services->services_aid = $_GET['home_servicesid'];
    $services->services_title = $data["services_title"];
    $services->services_sub_title_a = $data["services_sub_title_a"];
    $services->services_sub_title_b = $data["services_sub_title_b"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);

    // update
    $query = checkUpdate($services);
  }
  if ($isUpdateHomeServices == "servicesAUpdate") {
    $services->services_aid = $_GET['home_servicesid'];
    $services->services_title_a = $data["services_title_a"];
    $services->services_description_a = $data["services_description_a"];
    $services->services_button_text_a = $data["services_button_text_a"];
    $services->services_button_link_a = $data["services_button_link_a"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateServicesA($services);
  }
  if ($isUpdateHomeServices == "servicesBUpdate") {
    $services->services_aid = $_GET['home_servicesid'];
    $services->services_title_b = $data["services_title_b"];
    $services->services_description_b = $data["services_description_b"];
    $services->services_button_text_b = $data["services_button_text_b"];
    $services->services_button_link_b = $data["services_button_link_b"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateServicesB($services);
  }
  if ($isUpdateHomeServices == "servicesCUpdate") {
    $services->services_aid = $_GET['home_servicesid'];
    $services->services_title_c = $data["services_title_c"];
    $services->services_description_c = $data["services_description_c"];
    $services->services_button_text_c = $data["services_button_text_c"];
    $services->services_button_link_c = $data["services_button_link_c"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateServicesC($services);
  }
  if ($isUpdateHomeServices == "servicesDUpdate") {
    $services->services_aid = $_GET['home_servicesid'];
    $services->services_title_d = $data["services_title_d"];
    $services->services_description_d = $data["services_description_d"];
    $services->services_button_text_d = $data["services_button_text_d"];
    $services->services_button_link_d = $data["services_button_link_d"];


    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateServicesD($services);
  }

  returnSuccess($services, "services", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
