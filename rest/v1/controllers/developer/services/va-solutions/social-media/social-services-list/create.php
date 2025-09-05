<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_services_list = new SocialMediaServicesList($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$social_services_list->social_services_list_title = $data["social_services_list_title"];
$social_services_list->social_services_list_icon = $data["social_services_list_icon"];
$social_services_list->social_services_list_created = date("Y-m-d H:i:s");
$social_services_list->social_services_list_datetime = date("Y-m-d H:i:s");

$query = checkCreate($social_services_list);


returnSuccess($social_services_list, "social banner create", $query);
