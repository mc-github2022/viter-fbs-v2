<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_services_title = new AdministrativeServicesTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$administrativeServicesTitleUpdate = $data['administrativeServicesTitleUpdate'] ?? '';

if ($administrativeServicesTitleUpdate == "administrativeServicesUpdateTitle") {

    $administrative_services_title->administrative_services_title_black_a = $data["administrative_services_title_black_a"];
    $administrative_services_title->administrative_services_title_highlighted = $data["administrative_services_title_highlighted"];
    $administrative_services_title->administrative_services_title_black_b = $data["administrative_services_title_black_b"];
    $administrative_services_title->administrative_services_title_description = $data["administrative_services_title_description"];
    $administrative_services_title->administrative_services_title_button_text = $data["administrative_services_title_button_text"];
    $administrative_services_title->administrative_services_title_created = date("Y-m-d H:i:s");
    $administrative_services_title->administrative_services_title_datetime = date("Y-m-d H:i:s");

    $query = checkCreate($administrative_services_title);
}

returnSuccess($administrative_services_title, "administrative banner create", $query);
