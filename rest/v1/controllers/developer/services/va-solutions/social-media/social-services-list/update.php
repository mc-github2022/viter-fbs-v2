<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_services_list = new SocialMediaServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("social_services_listid", $_GET)) {
  // check data
  checkPayload($data);
  // get data


  $social_services_list->social_services_list_aid = $_GET['social_services_listid'];
  $social_services_list->social_services_list_title = $data["social_services_list_title"];
  $social_services_list->social_services_list_icon = $data["social_services_list_icon"];
  $social_services_list->social_services_list_datetime = date("Y-m-d H:i:s");


  checkId($social_services_list->social_services_list_aid);

  // update
  $query = checkUpdate($social_services_list);

  returnSuccess($social_services_list, "social banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
