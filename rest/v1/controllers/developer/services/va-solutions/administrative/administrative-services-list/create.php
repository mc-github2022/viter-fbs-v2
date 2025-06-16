<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_services_list = new AdministrativeServicesList($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$administrative_services_list->administrative_services_list_title = $data["administrative_services_list_title"];
$administrative_services_list->administrative_services_list_icon = $data["administrative_services_list_icon"];
$administrative_services_list->administrative_services_list_created = date("Y-m-d H:i:s");
$administrative_services_list->administrative_services_list_datetime = date("Y-m-d H:i:s");

$query = checkCreate($administrative_services_list);


returnSuccess($administrative_services_list, "administrative banner create", $query);
