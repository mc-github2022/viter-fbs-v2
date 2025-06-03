<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_services = new OjtServices($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$ojt_services->ojt_services_title = $data["ojt_services_title"];
$ojt_services->ojt_services_subtitle_a = $data["ojt_services_subtitle_a"];
$ojt_services->ojt_services_subtitle_b = $data["ojt_services_subtitle_b"];
$ojt_services->ojt_services_list = $data["ojt_services_list"];
$ojt_services->ojt_services_icon = $data["ojt_services_icon"];
$ojt_services->ojt_services_created = date("Y-m-d H:i:s");
$ojt_services->ojt_services_datetime = date("Y-m-d H:i:s");


$query = checkCreate($ojt_services);


returnSuccess($ojt_services, "hris services create", $query);
