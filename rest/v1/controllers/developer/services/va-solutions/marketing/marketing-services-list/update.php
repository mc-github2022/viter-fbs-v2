<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_services_list = new MarketingServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("marketing_services_listid", $_GET)) {
  // check data
  checkPayload($data);
  // get data


  $marketing_services_list->marketing_services_list_aid = $_GET['marketing_services_listid'];
  $marketing_services_list->marketing_services_list_title = $data["marketing_services_list_title"];
  $marketing_services_list->marketing_services_list_icon = $data["marketing_services_list_icon"];
  $marketing_services_list->marketing_services_list_datetime = date("Y-m-d H:i:s");


  checkId($marketing_services_list->marketing_services_list_aid);

  // update
  $query = checkUpdate($marketing_services_list);

  returnSuccess($marketing_services_list, "marketing banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
