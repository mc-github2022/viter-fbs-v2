<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new BookingTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateBookingTitle = $data['isUpdateBookingTitle'] ?? '';

// Set common fields
$title->booking_titles_created = date("Y-m-d H:i:s");
$title->booking_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateBookingTitle == "scopeTitleUpdate") {
    $title->booking_titles_overview_subtitle = $data["booking_titles_overview_subtitle"];
    $title->booking_titles_overview_title = $data["booking_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateBookingTitle == "packagesTitleUpdate") {
    $title->booking_titles_packages_subtitle = $data["booking_titles_packages_subtitle"];
    $title->booking_titles_packages_title = $data["booking_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}

// Return response
returnSuccess($title, "booking title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
