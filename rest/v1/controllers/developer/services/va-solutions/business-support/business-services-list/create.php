<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_services_list = new BusinessServicesList($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$business_services_list->business_services_list_title = $data["business_services_list_title"];
$business_services_list->business_services_list_icon = $data["business_services_list_icon"];
$business_services_list->business_services_list_created = date("Y-m-d H:i:s");
$business_services_list->business_services_list_datetime = date("Y-m-d H:i:s");

$query = checkCreate($business_services_list);


returnSuccess($business_services_list, "business banner create", $query);
