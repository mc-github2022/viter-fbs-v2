<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_services_list = new AdministrativeServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("administrative_services_listid", $_GET)) {
  // check data
  checkPayload($data);
  // get data


  $administrative_services_list->administrative_services_list_aid = $_GET['administrative_services_listid'];
  $administrative_services_list->administrative_services_list_title = $data["administrative_services_list_title"];
  $administrative_services_list->administrative_services_list_icon = $data["administrative_services_list_icon"];
  $administrative_services_list->administrative_services_list_datetime = date("Y-m-d H:i:s");


  checkId($administrative_services_list->administrative_services_list_aid);

  // update
  $query = checkUpdate($administrative_services_list);

  returnSuccess($administrative_services_list, "administrative banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
