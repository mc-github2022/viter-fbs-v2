<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_overview = new WordpressOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$wordpressOverviewUpdate = $data['wordpressOverviewUpdate'] ?? '';

// Set common fields
$wordpress_overview->wordpress_overview_created = date("Y-m-d H:i:s");
$wordpress_overview->wordpress_overview_datetime = date("Y-m-d H:i:s");


if ($wordpressOverviewUpdate == "wordpressOverviewUpdateImg") {
    $wordpress_overview->wordpress_overview_subtitle = $data["wordpress_overview_subtitle"];
    $wordpress_overview->wordpress_overview_title = $data["wordpress_overview_title"];
    $wordpress_overview->wordpress_overview_button_text = $data["wordpress_overview_button_text"];
    $wordpress_overview->wordpress_overview_img = $data["wordpress_overview_img"];

    $wordpress_overview_img_old = $data["wordpress_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_overview->wordpress_overview_img = checkToUploadGoogleDrive(
        $wordpress_overview->wordpress_overview_img, // FILES
        $wordpress_overview_img_old, // OLD FILES
    );

    $query = checkCreate($wordpress_overview);
}
if ($wordpressOverviewUpdate == "wordpressOverviewListUpdate") {
    $wordpress_overview->wordpress_overview_list_title_a = $data["wordpress_overview_list_title_a"];
    $wordpress_overview->wordpress_overview_list_description_a = $data["wordpress_overview_list_description_a"];
    $wordpress_overview->wordpress_overview_list_title_b = $data["wordpress_overview_list_title_b"];
    $wordpress_overview->wordpress_overview_list_description_b = $data["wordpress_overview_list_description_b"];
    $wordpress_overview->wordpress_overview_list_title_c = $data["wordpress_overview_list_title_c"];
    $wordpress_overview->wordpress_overview_list_description_c = $data["wordpress_overview_list_description_c"];

    $query = checkCreateOverviewList($wordpress_overview);
}


// Return response
returnSuccess($wordpress_overview, "wordpress overview create", $query);
