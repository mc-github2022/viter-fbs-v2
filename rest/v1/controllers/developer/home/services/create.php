<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$services = new HomeServices($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateHomeServices = $data['isUpdateHomeServices'] ?? '';

// Set common fields
$services->services_created = date("Y-m-d H:i:s");
$services->services_datetime = date("Y-m-d H:i:s");


if ($isUpdateHomeServices == "servicesTitleUpdate") {
    $services->services_title = $data["services_title"];
    $services->services_sub_title_a = $data["services_sub_title_a"];
    $services->services_sub_title_b = $data["services_sub_title_b"];

    $query = checkCreate($services);
}
if ($isUpdateHomeServices == "servicesAUpdate") {
    $services->services_title_a = $data["services_title_a"];
    $services->services_description_a = $data["services_description_a"];
    $services->services_button_text_a = $data["services_button_text_a"];
    $services->services_button_link_a = $data["services_button_link_a"];

    $query = checkCreateServicesA($services);
}
if ($isUpdateHomeServices == "servicesBUpdate") {
    $services->services_title_b = $data["services_title_b"];
    $services->services_description_b = $data["services_description_b"];
    $services->services_button_text_b = $data["services_button_text_b"];
    $services->services_button_link_b = $data["services_button_link_b"];

    $query = checkCreateServicesB($services);
}
if ($isUpdateHomeServices == "servicesCUpdate") {
    $services->services_title_c = $data["services_title_c"];
    $services->services_description_c = $data["services_description_c"];
    $services->services_button_text_c = $data["services_button_text_c"];
    $services->services_button_link_c = $data["services_button_link_c"];

    $query = checkCreateServicesC($services);
}
if ($isUpdateHomeServices == "servicesDUpdate") {
    $services->services_title_d = $data["services_title_d"];
    $services->services_description_d = $data["services_description_d"];
    $services->services_button_text_d = $data["services_button_text_d"];
    $services->services_button_link_d = $data["services_button_link_d"];

    $query = checkCreateServicesD($services);
}

// Return response
returnSuccess($services, "services", $query);

// Return 404 error if endpoint not available
checkEndpoint();
