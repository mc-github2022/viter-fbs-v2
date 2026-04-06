<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_insights = new Insights($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$home_insights->home_insights_is_active = $data["home_insights_is_active"];
$home_insights->home_insights_img = $data["home_insights_img"];
$home_insights->home_insights_img_list = $data["home_insights_img_list"];
$home_insights->home_insights_thumbnail = $data["home_insights_thumbnail"];
$home_insights->home_insights_category = $data["home_insights_category"];
$home_insights->home_insights_title = $data["home_insights_title"];
$home_insights->home_insights_slug =  checkIndex($data, "home_insights_slug");
$home_insights->home_insights_date = $data["home_insights_date"];
$home_insights->home_insights_paragraph_a = $data["home_insights_paragraph_a"];
$home_insights->home_insights_cta_is_active = $data["home_insights_cta_is_active"];
$home_insights->home_insights_cta_text = $data["home_insights_cta_text"];
$home_insights->home_insights_meta_description = $data["home_insights_meta_description"];
// $home_insights->home_insights_form_selected = $data["home_insights_form_selected"];
if ($data["home_insights_form_selected"] === "") {
  $home_insights->home_insights_form_selected = "default-receiver";
} else {
  $home_insights->home_insights_form_selected = $data["home_insights_form_selected"];
}
$home_insights->home_insights_created = date("Y-m-d H:i:s");
$home_insights->home_insights_datetime = date("Y-m-d H:i:s");

$home_insights_img_list_old = $data["home_insights_img_list_old"];
$home_insights_thumbnail_old = $data["home_insights_thumbnail_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$home_insights->home_insights_img_list = checkToUploadGoogleDrive(
  $home_insights->home_insights_img_list, // FILES
  $home_insights_img_list_old, // OLD FILES
);

// UPLOAD FILE TO GOOGLE DRIVE  
$home_insights->home_insights_thumbnail = checkToUploadGoogleDrive(
  $home_insights->home_insights_thumbnail, // FILES
  $home_insights_thumbnail_old, // OLD FILES
);

// //checks newly added data if it already exists
// isNameExist($home_insights, $home_insights->home_insights_name);

$query = checkCreate($home_insights);

returnSuccess($home_insights, "insights", $query);
