<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_overview = new BookkeepingOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$bookkeepingOverviewUpdate = $data['bookkeepingOverviewUpdate'] ?? '';

// Set common fields
$bookkeeping_overview->bookkeeping_overview_created = date("Y-m-d H:i:s");
$bookkeeping_overview->bookkeeping_overview_datetime = date("Y-m-d H:i:s");


if ($bookkeepingOverviewUpdate == "bookkeepingOverviewUpdateImg") {
    $bookkeeping_overview->bookkeeping_overview_subtitle = $data["bookkeeping_overview_subtitle"];
    $bookkeeping_overview->bookkeeping_overview_title = $data["bookkeeping_overview_title"];
    $bookkeeping_overview->bookkeeping_overview_img = $data["bookkeeping_overview_img"];

    $bookkeeping_overview_img_old = $data["bookkeeping_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $bookkeeping_overview->bookkeeping_overview_img = checkToUploadGoogleDrive(
        $bookkeeping_overview->bookkeeping_overview_img, // FILES
        $bookkeeping_overview_img_old, // OLD FILES
    );

    $query = checkCreate($bookkeeping_overview);
}
if ($bookkeepingOverviewUpdate == "bookkeepingOverviewListUpdate") {
    $bookkeeping_overview->bookkeeping_overview_list_title_a = $data["bookkeeping_overview_list_title_a"];
    $bookkeeping_overview->bookkeeping_overview_list_description_a = $data["bookkeeping_overview_list_description_a"];
    $bookkeeping_overview->bookkeeping_overview_list_title_b = $data["bookkeeping_overview_list_title_b"];
    $bookkeeping_overview->bookkeeping_overview_list_description_b = $data["bookkeeping_overview_list_description_b"];
    $bookkeeping_overview->bookkeeping_overview_list_title_c = $data["bookkeeping_overview_list_title_c"];
    $bookkeeping_overview->bookkeeping_overview_list_description_c = $data["bookkeeping_overview_list_description_c"];

    $query = checkCreateOverviewList($bookkeeping_overview);
}


// Return response
returnSuccess($bookkeeping_overview, "bookkeeping overview create", $query);
