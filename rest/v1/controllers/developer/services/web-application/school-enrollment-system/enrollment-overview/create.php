<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_overview = new EnrollmentOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$enrollmentOverviewUpdate = $data['enrollmentOverviewUpdate'] ?? '';

// Set common fields
$enrollment_overview->enrollment_overview_created = date("Y-m-d H:i:s");
$enrollment_overview->enrollment_overview_datetime = date("Y-m-d H:i:s");


if ($enrollmentOverviewUpdate == "enrollmentOverviewUpdateImg") {
    $enrollment_overview->enrollment_overview_subtitle = $data["enrollment_overview_subtitle"];
    $enrollment_overview->enrollment_overview_title = $data["enrollment_overview_title"];
    $enrollment_overview->enrollment_overview_button_text = $data["enrollment_overview_button_text"];
    $enrollment_overview->enrollment_overview_img = $data["enrollment_overview_img"];

    $enrollment_overview_img_old = $data["enrollment_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $enrollment_overview->enrollment_overview_img = checkToUploadGoogleDrive(
        $enrollment_overview->enrollment_overview_img, // FILES
        $enrollment_overview_img_old, // OLD FILES
    );

    $query = checkCreate($enrollment_overview);
}
if ($enrollmentOverviewUpdate == "enrollmentOverviewListUpdate") {
    $enrollment_overview->enrollment_overview_list_title_a = $data["enrollment_overview_list_title_a"];
    $enrollment_overview->enrollment_overview_list_description_a = $data["enrollment_overview_list_description_a"];
    $enrollment_overview->enrollment_overview_list_title_b = $data["enrollment_overview_list_title_b"];
    $enrollment_overview->enrollment_overview_list_description_b = $data["enrollment_overview_list_description_b"];
    $enrollment_overview->enrollment_overview_list_title_c = $data["enrollment_overview_list_title_c"];
    $enrollment_overview->enrollment_overview_list_description_c = $data["enrollment_overview_list_description_c"];

    $query = checkCreateOverviewList($enrollment_overview);
}


// Return response
returnSuccess($enrollment_overview, "enrollment overview create", $query);
