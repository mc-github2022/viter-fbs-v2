<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_overview = new BusinessOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$businessOverviewUpdate = $data['businessOverviewUpdate'] ?? '';

// Set common fields
$business_overview->business_overview_created = date("Y-m-d H:i:s");
$business_overview->business_overview_datetime = date("Y-m-d H:i:s");


if ($businessOverviewUpdate == "businessOverviewUpdateImg") {
    $business_overview->business_overview_subtitle = $data["business_overview_subtitle"];
    $business_overview->business_overview_title = $data["business_overview_title"];
    $business_overview->business_overview_img = $data["business_overview_img"];

    $business_overview_img_old = $data["business_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $business_overview->business_overview_img = checkToUploadGoogleDrive(
        $business_overview->business_overview_img, // FILES
        $business_overview_img_old, // OLD FILES
    );

    $query = checkCreate($business_overview);
}
if ($businessOverviewUpdate == "businessOverviewListUpdate") {
    $business_overview->business_overview_list_title_a = $data["business_overview_list_title_a"];
    $business_overview->business_overview_list_description_a = $data["business_overview_list_description_a"];
    $business_overview->business_overview_list_title_b = $data["business_overview_list_title_b"];
    $business_overview->business_overview_list_description_b = $data["business_overview_list_description_b"];
    $business_overview->business_overview_list_title_c = $data["business_overview_list_title_c"];
    $business_overview->business_overview_list_description_c = $data["business_overview_list_description_c"];

    $query = checkCreateOverviewList($business_overview);
}


// Return response
returnSuccess($business_overview, "business overview create", $query);
