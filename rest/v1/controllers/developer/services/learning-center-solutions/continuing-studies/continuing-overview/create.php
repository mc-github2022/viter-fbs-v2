<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_overview = new ContinuingOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$continuingOverviewUpdate = $data['continuingOverviewUpdate'] ?? '';

// Set common fields
$continuing_overview->continuing_overview_created = date("Y-m-d H:i:s");
$continuing_overview->continuing_overview_datetime = date("Y-m-d H:i:s");


if ($continuingOverviewUpdate == "continuingOverviewUpdateImg") {
    $continuing_overview->continuing_overview_subtitle = $data["continuing_overview_subtitle"];
    $continuing_overview->continuing_overview_title = $data["continuing_overview_title"];
    $continuing_overview->continuing_overview_button_text = $data["continuing_overview_button_text"];
    $continuing_overview->continuing_overview_img = $data["continuing_overview_img"];

    $continuing_overview_img_old = $data["continuing_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $continuing_overview->continuing_overview_img = checkToUploadGoogleDrive(
        $continuing_overview->continuing_overview_img, // FILES
        $continuing_overview_img_old, // OLD FILES
    );

    $query = checkCreate($continuing_overview);
}
if ($continuingOverviewUpdate == "continuingOverviewListUpdate") {
    $continuing_overview->continuing_overview_list_title_a = $data["continuing_overview_list_title_a"];
    $continuing_overview->continuing_overview_list_description_a = $data["continuing_overview_list_description_a"];
    $continuing_overview->continuing_overview_list_title_b = $data["continuing_overview_list_title_b"];
    $continuing_overview->continuing_overview_list_description_b = $data["continuing_overview_list_description_b"];
    $continuing_overview->continuing_overview_list_title_c = $data["continuing_overview_list_title_c"];
    $continuing_overview->continuing_overview_list_description_c = $data["continuing_overview_list_description_c"];

    $query = checkCreateOverviewList($continuing_overview);
}


// Return response
returnSuccess($continuing_overview, "continuing overview create", $query);
