<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_services = new ImmersionServices($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$immersion_services->immersion_services_title = $data["immersion_services_title"];
$immersion_services->immersion_services_subtitle_a = $data["immersion_services_subtitle_a"];
$immersion_services->immersion_services_subtitle_b = $data["immersion_services_subtitle_b"];
$immersion_services->immersion_services_list = $data["immersion_services_list"];
$immersion_services->immersion_services_icon = $data["immersion_services_icon"];
$immersion_services->immersion_services_created = date("Y-m-d H:i:s");
$immersion_services->immersion_services_datetime = date("Y-m-d H:i:s");


$query = checkCreate($immersion_services);


returnSuccess($immersion_services, "immersion services create", $query);
