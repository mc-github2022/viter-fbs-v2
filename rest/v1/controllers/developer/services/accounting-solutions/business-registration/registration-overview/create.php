<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_overview = new RegistrationOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$registrationOverviewUpdate = $data['registrationOverviewUpdate'] ?? '';

// Set common fields
$registration_overview->registration_overview_created = date("Y-m-d H:i:s");
$registration_overview->registration_overview_datetime = date("Y-m-d H:i:s");


if ($registrationOverviewUpdate == "registrationOverviewUpdateImg") {
    $registration_overview->registration_overview_subtitle = $data["registration_overview_subtitle"];
    $registration_overview->registration_overview_title = $data["registration_overview_title"];
    $registration_overview->registration_overview_img = $data["registration_overview_img"];

    $registration_overview_img_old = $data["registration_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $registration_overview->registration_overview_img = checkToUploadGoogleDrive(
        $registration_overview->registration_overview_img, // FILES
        $registration_overview_img_old, // OLD FILES
    );

    $query = checkCreate($registration_overview);
}
if ($registrationOverviewUpdate == "registrationOverviewListUpdate") {
    $registration_overview->registration_overview_list_title_a = $data["registration_overview_list_title_a"];
    $registration_overview->registration_overview_list_description_a = $data["registration_overview_list_description_a"];
    $registration_overview->registration_overview_list_title_b = $data["registration_overview_list_title_b"];
    $registration_overview->registration_overview_list_description_b = $data["registration_overview_list_description_b"];
    $registration_overview->registration_overview_list_title_c = $data["registration_overview_list_title_c"];
    $registration_overview->registration_overview_list_description_c = $data["registration_overview_list_description_c"];

    $query = checkCreateOverviewList($registration_overview);
}


// Return response
returnSuccess($registration_overview, "registration overview create", $query);
