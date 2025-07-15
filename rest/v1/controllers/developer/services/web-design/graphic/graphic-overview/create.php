<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_overview = new GraphicOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$graphicOverviewUpdate = $data['graphicOverviewUpdate'] ?? '';

// Set common fields
$graphic_overview->graphic_overview_created = date("Y-m-d H:i:s");
$graphic_overview->graphic_overview_datetime = date("Y-m-d H:i:s");


if ($graphicOverviewUpdate == "graphicOverviewUpdateImg") {
    $graphic_overview->graphic_overview_subtitle_a = $data["graphic_overview_subtitle_a"];
    $graphic_overview->graphic_overview_subtitle_b = $data["graphic_overview_subtitle_b"];
    $graphic_overview->graphic_overview_title = $data["graphic_overview_title"];
    $graphic_overview->graphic_overview_button_text = $data["graphic_overview_button_text"];
    $graphic_overview->graphic_overview_img = $data["graphic_overview_img"];

    $graphic_overview_img_old = $data["graphic_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $graphic_overview->graphic_overview_img = checkToUploadGoogleDrive(
        $graphic_overview->graphic_overview_img, // FILES
        $graphic_overview_img_old, // OLD FILES
    );

    $query = checkCreate($graphic_overview);
}
if ($graphicOverviewUpdate == "graphicOverviewListUpdate") {
    $graphic_overview->graphic_overview_list_title_a = $data["graphic_overview_list_title_a"];
    $graphic_overview->graphic_overview_list_description_a = $data["graphic_overview_list_description_a"];
    $graphic_overview->graphic_overview_list_title_b = $data["graphic_overview_list_title_b"];
    $graphic_overview->graphic_overview_list_description_b = $data["graphic_overview_list_description_b"];
    $graphic_overview->graphic_overview_list_title_c = $data["graphic_overview_list_title_c"];
    $graphic_overview->graphic_overview_list_description_c = $data["graphic_overview_list_description_c"];

    $query = checkCreateOverviewList($graphic_overview);
}


// Return response
returnSuccess($graphic_overview, "graphic overview create", $query);
