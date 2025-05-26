<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_overview = new DonationOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$donationOverviewUpdate = $data['donationOverviewUpdate'] ?? '';

// Set common fields
$donation_overview->donation_overview_created = date("Y-m-d H:i:s");
$donation_overview->donation_overview_datetime = date("Y-m-d H:i:s");


if ($donationOverviewUpdate == "donationOverviewUpdateImg") {
    $donation_overview->donation_overview_subtitle = $data["donation_overview_subtitle"];
    $donation_overview->donation_overview_title = $data["donation_overview_title"];
    $donation_overview->donation_overview_button_text = $data["donation_overview_button_text"];
    $donation_overview->donation_overview_img = $data["donation_overview_img"];

    $donation_overview_img_old = $data["donation_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $donation_overview->donation_overview_img = checkToUploadGoogleDrive(
        $donation_overview->donation_overview_img, // FILES
        $donation_overview_img_old, // OLD FILES
    );

    $query = checkCreate($donation_overview);
}
if ($donationOverviewUpdate == "donationOverviewListUpdate") {
    $donation_overview->donation_overview_list_title_a = $data["donation_overview_list_title_a"];
    $donation_overview->donation_overview_list_description_a = $data["donation_overview_list_description_a"];
    $donation_overview->donation_overview_list_title_b = $data["donation_overview_list_title_b"];
    $donation_overview->donation_overview_list_description_b = $data["donation_overview_list_description_b"];
    $donation_overview->donation_overview_list_title_c = $data["donation_overview_list_title_c"];
    $donation_overview->donation_overview_list_description_c = $data["donation_overview_list_description_c"];

    $query = checkCreateOverviewList($donation_overview);
}


// Return response
returnSuccess($donation_overview, "donation overview create", $query);
