<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_overview = new OjtOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$ojtOverviewUpdate = $data['ojtOverviewUpdate'] ?? '';

// Set common fields
$ojt_overview->ojt_overview_created = date("Y-m-d H:i:s");
$ojt_overview->ojt_overview_datetime = date("Y-m-d H:i:s");


if ($ojtOverviewUpdate == "ojtOverviewUpdateImg") {
    $ojt_overview->ojt_overview_subtitle = $data["ojt_overview_subtitle"];
    $ojt_overview->ojt_overview_title = $data["ojt_overview_title"];
    $ojt_overview->ojt_overview_button_text = $data["ojt_overview_button_text"];
    $ojt_overview->ojt_overview_img = $data["ojt_overview_img"];
    $ojt_overview->ojt_overview_file = $data["ojt_overview_file"];

    $ojt_overview_file_old = $data["ojt_overview_file_old"];
    $ojt_overview_img_old = $data["ojt_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $ojt_overview->ojt_overview_img = checkToUploadGoogleDrive(
        $ojt_overview->ojt_overview_img, // FILES
        $ojt_overview_img_old, // OLD FILES
    );

    // UPLOAD FILE TO GOOGLE DRIVE  
    $ojt_overview->ojt_overview_file = checkToUploadGoogleDrive(
        $ojt_overview->ojt_overview_file, // FILES
        $ojt_overview_file_old, // OLD FILES
    );

    $query = checkCreate($ojt_overview);
}
if ($ojtOverviewUpdate == "ojtOverviewListUpdate") {
    $ojt_overview->ojt_overview_list_title_a = $data["ojt_overview_list_title_a"];
    $ojt_overview->ojt_overview_list_description_a = $data["ojt_overview_list_description_a"];
    $ojt_overview->ojt_overview_list_title_b = $data["ojt_overview_list_title_b"];
    $ojt_overview->ojt_overview_list_description_b = $data["ojt_overview_list_description_b"];
    $ojt_overview->ojt_overview_list_title_c = $data["ojt_overview_list_title_c"];
    $ojt_overview->ojt_overview_list_description_c = $data["ojt_overview_list_description_c"];

    $query = checkCreateOverviewList($ojt_overview);
}


// Return response
returnSuccess($ojt_overview, "ojt overview create", $query);
