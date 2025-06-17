<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_services_list = new MarketingServicesList($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$marketing_services_list->marketing_services_list_title = $data["marketing_services_list_title"];
$marketing_services_list->marketing_services_list_icon = $data["marketing_services_list_icon"];
$marketing_services_list->marketing_services_list_created = date("Y-m-d H:i:s");
$marketing_services_list->marketing_services_list_datetime = date("Y-m-d H:i:s");

$query = checkCreate($marketing_services_list);


returnSuccess($marketing_services_list, "marketing banner create", $query);
