<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_overview = new SocialMediaOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$socialOverviewUpdate = $data['socialOverviewUpdate'] ?? '';

// Set common fields
$social_overview->social_overview_created = date("Y-m-d H:i:s");
$social_overview->social_overview_datetime = date("Y-m-d H:i:s");


if ($socialOverviewUpdate == "socialOverviewUpdateImg") {
    $social_overview->social_overview_subtitle = $data["social_overview_subtitle"];
    $social_overview->social_overview_title = $data["social_overview_title"];
    $social_overview->social_overview_img = $data["social_overview_img"];

    $social_overview_img_old = $data["social_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $social_overview->social_overview_img = checkToUploadGoogleDrive(
        $social_overview->social_overview_img, // FILES
        $social_overview_img_old, // OLD FILES
    );

    $query = checkCreate($social_overview);
}
if ($socialOverviewUpdate == "socialOverviewListUpdate") {
    $social_overview->social_overview_list_title_a = $data["social_overview_list_title_a"];
    $social_overview->social_overview_list_description_a = $data["social_overview_list_description_a"];
    $social_overview->social_overview_list_title_b = $data["social_overview_list_title_b"];
    $social_overview->social_overview_list_description_b = $data["social_overview_list_description_b"];
    $social_overview->social_overview_list_title_c = $data["social_overview_list_title_c"];
    $social_overview->social_overview_list_description_c = $data["social_overview_list_description_c"];
    $social_overview->social_overview_list_title_d = $data["social_overview_list_title_d"];
    $social_overview->social_overview_list_description_d = $data["social_overview_list_description_d"];

    $query = checkCreateOverviewList($social_overview);
}


// Return response
returnSuccess($social_overview, "social overview create", $query);
