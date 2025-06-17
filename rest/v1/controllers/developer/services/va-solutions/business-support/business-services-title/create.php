<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_services_title = new BusinessServicesTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$businessServicesTitleUpdate = $data['businessServicesTitleUpdate'] ?? '';

if ($businessServicesTitleUpdate == "businessServicesUpdateTitle") {

    $business_services_title->business_services_title_black_a = $data["business_services_title_black_a"];
    $business_services_title->business_services_title_highlighted = $data["business_services_title_highlighted"];
    $business_services_title->business_services_title_black_b = $data["business_services_title_black_b"];
    $business_services_title->business_services_title_description = $data["business_services_title_description"];
    $business_services_title->business_services_title_button_text = $data["business_services_title_button_text"];
    $business_services_title->business_services_title_created = date("Y-m-d H:i:s");
    $business_services_title->business_services_title_datetime = date("Y-m-d H:i:s");

    $query = checkCreate($business_services_title);
}

returnSuccess($business_services_title, "business banner create", $query);
