<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_overview = new HrisOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$hrisOverviewUpdate = $data['hrisOverviewUpdate'] ?? '';

// Set common fields
$hris_overview->hris_overview_created = date("Y-m-d H:i:s");
$hris_overview->hris_overview_datetime = date("Y-m-d H:i:s");


if ($hrisOverviewUpdate == "hrisOverviewUpdateImg") {
    $hris_overview->hris_overview_subtitle = $data["hris_overview_subtitle"];
    $hris_overview->hris_overview_title = $data["hris_overview_title"];
    $hris_overview->hris_overview_img = $data["hris_overview_img"];

    $hris_overview_img_old = $data["hris_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $hris_overview->hris_overview_img = checkToUploadGoogleDrive(
        $hris_overview->hris_overview_img, // FILES
        $hris_overview_img_old, // OLD FILES
    );

    $query = checkCreate($hris_overview);
}
if ($hrisOverviewUpdate == "hrisOverviewListUpdate") {
    $hris_overview->hris_overview_list_title_a = $data["hris_overview_list_title_a"];
    $hris_overview->hris_overview_list_description_a = $data["hris_overview_list_description_a"];
    $hris_overview->hris_overview_list_title_b = $data["hris_overview_list_title_b"];
    $hris_overview->hris_overview_list_description_b = $data["hris_overview_list_description_b"];
    $hris_overview->hris_overview_list_title_c = $data["hris_overview_list_title_c"];
    $hris_overview->hris_overview_list_description_c = $data["hris_overview_list_description_c"];

    $query = checkCreateOverviewList($hris_overview);
}


// Return response
returnSuccess($hris_overview, "hris overview create", $query);
