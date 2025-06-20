<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_overview = new WebsiteOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$websiteOverviewUpdate = $data['websiteOverviewUpdate'] ?? '';

// Set common fields
$website_overview->website_overview_created = date("Y-m-d H:i:s");
$website_overview->website_overview_datetime = date("Y-m-d H:i:s");


if ($websiteOverviewUpdate == "websiteOverviewUpdateImg") {
    $website_overview->website_overview_subtitle = $data["website_overview_subtitle"];
    $website_overview->website_overview_title = $data["website_overview_title"];
    $website_overview->website_overview_button_text = $data["website_overview_button_text"];
    $website_overview->website_overview_img = $data["website_overview_img"];
    $website_overview->website_overview_file = $data["website_overview_file"];

    $website_overview_file_old = $data["website_overview_file_old"];
    $website_overview_img_old = $data["website_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $website_overview->website_overview_img = checkToUploadGoogleDrive(
        $website_overview->website_overview_img, // FILES
        $website_overview_img_old, // OLD FILES
    );

    // UPLOAD FILE TO GOOGLE DRIVE  
    $website_overview->website_overview_file = checkToUploadGoogleDrive(
        $website_overview->website_overview_file, // FILES
        $website_overview_file_old, // OLD FILES
    );

    $query = checkCreate($website_overview);
}
if ($websiteOverviewUpdate == "websiteOverviewListUpdate") {
    $website_overview->website_overview_list_title_a = $data["website_overview_list_title_a"];
    $website_overview->website_overview_list_description_a = $data["website_overview_list_description_a"];
    $website_overview->website_overview_list_title_b = $data["website_overview_list_title_b"];
    $website_overview->website_overview_list_description_b = $data["website_overview_list_description_b"];
    $website_overview->website_overview_list_title_c = $data["website_overview_list_title_c"];
    $website_overview->website_overview_list_description_c = $data["website_overview_list_description_c"];

    $query = checkCreateOverviewList($website_overview);
}


// Return response
returnSuccess($website_overview, "website overview create", $query);
