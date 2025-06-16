<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_overview = new AdministrativeOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$administrativeOverviewUpdate = $data['administrativeOverviewUpdate'] ?? '';

// Set common fields
$administrative_overview->administrative_overview_created = date("Y-m-d H:i:s");
$administrative_overview->administrative_overview_datetime = date("Y-m-d H:i:s");


if ($administrativeOverviewUpdate == "administrativeOverviewUpdateImg") {
    $administrative_overview->administrative_overview_subtitle = $data["administrative_overview_subtitle"];
    $administrative_overview->administrative_overview_title = $data["administrative_overview_title"];
    $administrative_overview->administrative_overview_img = $data["administrative_overview_img"];

    $administrative_overview_img_old = $data["administrative_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $administrative_overview->administrative_overview_img = checkToUploadGoogleDrive(
        $administrative_overview->administrative_overview_img, // FILES
        $administrative_overview_img_old, // OLD FILES
    );

    $query = checkCreate($administrative_overview);
}
if ($administrativeOverviewUpdate == "administrativeOverviewListUpdate") {
    $administrative_overview->administrative_overview_list_title_a = $data["administrative_overview_list_title_a"];
    $administrative_overview->administrative_overview_list_description_a = $data["administrative_overview_list_description_a"];
    $administrative_overview->administrative_overview_list_title_b = $data["administrative_overview_list_title_b"];
    $administrative_overview->administrative_overview_list_description_b = $data["administrative_overview_list_description_b"];
    $administrative_overview->administrative_overview_list_title_c = $data["administrative_overview_list_title_c"];
    $administrative_overview->administrative_overview_list_description_c = $data["administrative_overview_list_description_c"];

    $query = checkCreateOverviewList($administrative_overview);
}


// Return response
returnSuccess($administrative_overview, "administrative overview create", $query);
