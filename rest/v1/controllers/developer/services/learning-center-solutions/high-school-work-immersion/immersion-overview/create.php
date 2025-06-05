<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_overview = new ImmersionOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$immersionOverviewUpdate = $data['immersionOverviewUpdate'] ?? '';

// Set common fields
$immersion_overview->immersion_overview_created = date("Y-m-d H:i:s");
$immersion_overview->immersion_overview_datetime = date("Y-m-d H:i:s");


if ($immersionOverviewUpdate == "immersionOverviewUpdateImg") {
    $immersion_overview->immersion_overview_subtitle = $data["immersion_overview_subtitle"];
    $immersion_overview->immersion_overview_title = $data["immersion_overview_title"];
    $immersion_overview->immersion_overview_button_text = $data["immersion_overview_button_text"];
    $immersion_overview->immersion_overview_img = $data["immersion_overview_img"];
    $immersion_overview->immersion_overview_file = $data["immersion_overview_file"];

    $immersion_overview_file_old = $data["immersion_overview_file_old"];
    $immersion_overview_img_old = $data["immersion_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $immersion_overview->immersion_overview_img = checkToUploadGoogleDrive(
        $immersion_overview->immersion_overview_img, // FILES
        $immersion_overview_img_old, // OLD FILES
    );

    // UPLOAD FILE TO GOOGLE DRIVE  
    $immersion_overview->immersion_overview_file = checkToUploadGoogleDrive(
        $immersion_overview->immersion_overview_file, // FILES
        $immersion_overview_file_old, // OLD FILES
    );

    $query = checkCreate($immersion_overview);
}
if ($immersionOverviewUpdate == "immersionOverviewListUpdate") {
    $immersion_overview->immersion_overview_list_title_a = $data["immersion_overview_list_title_a"];
    $immersion_overview->immersion_overview_list_description_a = $data["immersion_overview_list_description_a"];
    $immersion_overview->immersion_overview_list_title_b = $data["immersion_overview_list_title_b"];
    $immersion_overview->immersion_overview_list_description_b = $data["immersion_overview_list_description_b"];
    $immersion_overview->immersion_overview_list_title_c = $data["immersion_overview_list_title_c"];
    $immersion_overview->immersion_overview_list_description_c = $data["immersion_overview_list_description_c"];

    $query = checkCreateOverviewList($immersion_overview);
}


// Return response
returnSuccess($immersion_overview, "immersion overview create", $query);
