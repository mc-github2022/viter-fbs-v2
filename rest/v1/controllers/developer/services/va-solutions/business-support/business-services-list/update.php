<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_services_list = new BusinessServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("business_services_listid", $_GET)) {
  // check data
  checkPayload($data);
  // get data


  $business_services_list->business_services_list_aid = $_GET['business_services_listid'];
  $business_services_list->business_services_list_title = $data["business_services_list_title"];
  $business_services_list->business_services_list_icon = $data["business_services_list_icon"];
  $business_services_list->business_services_list_datetime = date("Y-m-d H:i:s");


  checkId($business_services_list->business_services_list_aid);

  // update
  $query = checkUpdate($business_services_list);

  returnSuccess($business_services_list, "business banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
