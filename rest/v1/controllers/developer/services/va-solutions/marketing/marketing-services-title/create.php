<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_services_title = new MarketingServicesTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$marketingServicesTitleUpdate = $data['marketingServicesTitleUpdate'] ?? '';

if ($marketingServicesTitleUpdate == "marketingServicesUpdateTitle") {

    $marketing_services_title->marketing_services_title_black_a = $data["marketing_services_title_black_a"];
    $marketing_services_title->marketing_services_title_highlighted = $data["marketing_services_title_highlighted"];
    $marketing_services_title->marketing_services_title_black_b = $data["marketing_services_title_black_b"];
    $marketing_services_title->marketing_services_title_description = $data["marketing_services_title_description"];
    $marketing_services_title->marketing_services_title_button_text = $data["marketing_services_title_button_text"];
    $marketing_services_title->marketing_services_title_created = date("Y-m-d H:i:s");
    $marketing_services_title->marketing_services_title_datetime = date("Y-m-d H:i:s");

    $query = checkCreate($marketing_services_title);
}

returnSuccess($marketing_services_title, "marketing banner create", $query);
