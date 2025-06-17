<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_overview = new MarketingOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$marketingOverviewUpdate = $data['marketingOverviewUpdate'] ?? '';

// Set common fields
$marketing_overview->marketing_overview_created = date("Y-m-d H:i:s");
$marketing_overview->marketing_overview_datetime = date("Y-m-d H:i:s");


if ($marketingOverviewUpdate == "marketingOverviewUpdateImg") {
    $marketing_overview->marketing_overview_subtitle = $data["marketing_overview_subtitle"];
    $marketing_overview->marketing_overview_title = $data["marketing_overview_title"];
    $marketing_overview->marketing_overview_img = $data["marketing_overview_img"];

    $marketing_overview_img_old = $data["marketing_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $marketing_overview->marketing_overview_img = checkToUploadGoogleDrive(
        $marketing_overview->marketing_overview_img, // FILES
        $marketing_overview_img_old, // OLD FILES
    );

    $query = checkCreate($marketing_overview);
}
if ($marketingOverviewUpdate == "marketingOverviewListUpdate") {
    $marketing_overview->marketing_overview_list_title_a = $data["marketing_overview_list_title_a"];
    $marketing_overview->marketing_overview_list_description_a = $data["marketing_overview_list_description_a"];
    $marketing_overview->marketing_overview_list_title_b = $data["marketing_overview_list_title_b"];
    $marketing_overview->marketing_overview_list_description_b = $data["marketing_overview_list_description_b"];
    $marketing_overview->marketing_overview_list_title_c = $data["marketing_overview_list_title_c"];
    $marketing_overview->marketing_overview_list_description_c = $data["marketing_overview_list_description_c"];

    $query = checkCreateOverviewList($marketing_overview);
}


// Return response
returnSuccess($marketing_overview, "marketing overview create", $query);
