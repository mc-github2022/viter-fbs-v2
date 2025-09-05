<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_services_title = new SocialMediaServicesTitle($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("social_services_titleid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $socialServicesTitleUpdate = $data['socialServicesTitleUpdate'];

  if ($socialServicesTitleUpdate == "socialServicesUpdateTitle") {

    $social_services_title->social_services_title_aid = $_GET['social_services_titleid'];
    $social_services_title->social_services_title_black_a = $data["social_services_title_black_a"];
    $social_services_title->social_services_title_highlighted = $data["social_services_title_highlighted"];
    $social_services_title->social_services_title_black_b = $data["social_services_title_black_b"];
    $social_services_title->social_services_title_description = $data["social_services_title_description"];
    $social_services_title->social_services_title_button_text = $data["social_services_title_button_text"];
    $social_services_title->social_services_title_datetime = date("Y-m-d H:i:s");


    checkId($social_services_title->social_services_title_aid);

    // update
    $query = checkUpdate($social_services_title);
  }

  returnSuccess($social_services_title, "social banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
