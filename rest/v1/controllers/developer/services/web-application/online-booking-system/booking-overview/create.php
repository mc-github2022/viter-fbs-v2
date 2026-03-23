<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_overview = new BookingOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$bookingOverviewUpdate = $data['bookingOverviewUpdate'] ?? '';

// Set common fields
$booking_overview->booking_overview_created = date("Y-m-d H:i:s");
$booking_overview->booking_overview_datetime = date("Y-m-d H:i:s");


if ($bookingOverviewUpdate == "bookingOverviewUpdateImg") {
    $booking_overview->booking_overview_subtitle = $data["booking_overview_subtitle"];
    $booking_overview->booking_overview_title = $data["booking_overview_title"];
    $booking_overview->booking_overview_button_text = $data["booking_overview_button_text"];
    $booking_overview->booking_overview_img = $data["booking_overview_img"];

    $booking_overview_img_old = $data["booking_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $booking_overview->booking_overview_img = checkToUploadGoogleDrive(
        $booking_overview->booking_overview_img, // FILES
        $booking_overview_img_old, // OLD FILES
    );

    $query = checkCreate($booking_overview);
}
if ($bookingOverviewUpdate == "bookingOverviewListUpdate") {
    $booking_overview->booking_overview_list_title_a = $data["booking_overview_list_title_a"];
    $booking_overview->booking_overview_list_description_a = $data["booking_overview_list_description_a"];
    $booking_overview->booking_overview_list_title_b = $data["booking_overview_list_title_b"];
    $booking_overview->booking_overview_list_description_b = $data["booking_overview_list_description_b"];
    $booking_overview->booking_overview_list_title_c = $data["booking_overview_list_title_c"];
    $booking_overview->booking_overview_list_description_c = $data["booking_overview_list_description_c"];

    $query = checkCreateOverviewList($booking_overview);
}


// Return response
returnSuccess($booking_overview, "booking overview create", $query);
