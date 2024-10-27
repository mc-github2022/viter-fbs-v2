<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_banner = new Banner($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$home_banner->home_banner_sub_title = $data["home_banner_sub_title"];
$home_banner->home_banner_title = $data["home_banner_title"];
$home_banner->home_banner_description = $data["home_banner_description"];
$home_banner->home_banner_button_text = $data["home_banner_button_text"];
$home_banner->home_banner_img = $data["home_banner_img"];
$home_banner->home_banner_created = date("Y-m-d H:i:s");
$home_banner->home_banner_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
// isNameExist($home_banner, $home_banner->home_banner_name);

$query = checkCreate($home_banner);

returnSuccess($home_banner, "banner", $query);
