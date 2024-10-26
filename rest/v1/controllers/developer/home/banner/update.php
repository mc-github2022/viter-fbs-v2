<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_banner = new Banner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("home_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $home_banner->home_banner_aid = $_GET['home_bannerid'];
  $home_banner->home_banner_sub_title = $data["home_banner_sub_title"];
  $home_banner->home_banner_title = $data["home_banner_title"];
  $home_banner->home_banner_description = $data["home_banner_description"];
  $home_banner->home_banner_button_text = $data["home_banner_button_text"];
  $home_banner->home_banner_img = $data["home_banner_img"];
  $home_banner->home_banner_datetime = date("Y-m-d H:i:s");
  checkId($home_banner->home_banner_aid);


  // //checks current data to avoid same entries from being updated
  // $user_home_banner_fname_old = checkIndex($data, 'user_home_banner_fname_old');
  // compareName($home_banner, $user_home_banner_fname_old, $home_banner->user_home_banner_fname);

  // update
  $query = checkUpdate($home_banner);
  returnSuccess($home_banner, "banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
