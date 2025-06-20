<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_overview = new SinglepageOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$singlepageOverviewUpdate = $data['singlepageOverviewUpdate'] ?? '';

// Set common fields
$singlepage_overview->singlepage_overview_created = date("Y-m-d H:i:s");
$singlepage_overview->singlepage_overview_datetime = date("Y-m-d H:i:s");


if ($singlepageOverviewUpdate == "singlepageOverviewUpdateImg") {
    $singlepage_overview->singlepage_overview_subtitle = $data["singlepage_overview_subtitle"];
    $singlepage_overview->singlepage_overview_title = $data["singlepage_overview_title"];
    $singlepage_overview->singlepage_overview_button_text = $data["singlepage_overview_button_text"];
    $singlepage_overview->singlepage_overview_img = $data["singlepage_overview_img"];
    $singlepage_overview->singlepage_overview_file = $data["singlepage_overview_file"];

    $singlepage_overview_file_old = $data["singlepage_overview_file_old"];
    $singlepage_overview_img_old = $data["singlepage_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $singlepage_overview->singlepage_overview_img = checkToUploadGoogleDrive(
        $singlepage_overview->singlepage_overview_img, // FILES
        $singlepage_overview_img_old, // OLD FILES
    );

    // UPLOAD FILE TO GOOGLE DRIVE  
    $singlepage_overview->singlepage_overview_file = checkToUploadGoogleDrive(
        $singlepage_overview->singlepage_overview_file, // FILES
        $singlepage_overview_file_old, // OLD FILES
    );

    $query = checkCreate($singlepage_overview);
}
if ($singlepageOverviewUpdate == "singlepageOverviewListUpdate") {
    $singlepage_overview->singlepage_overview_list_title_a = $data["singlepage_overview_list_title_a"];
    $singlepage_overview->singlepage_overview_list_description_a = $data["singlepage_overview_list_description_a"];
    $singlepage_overview->singlepage_overview_list_title_b = $data["singlepage_overview_list_title_b"];
    $singlepage_overview->singlepage_overview_list_description_b = $data["singlepage_overview_list_description_b"];
    $singlepage_overview->singlepage_overview_list_title_c = $data["singlepage_overview_list_title_c"];
    $singlepage_overview->singlepage_overview_list_description_c = $data["singlepage_overview_list_description_c"];

    $query = checkCreateOverviewList($singlepage_overview);
}


// Return response
returnSuccess($singlepage_overview, "singlepage overview create", $query);
