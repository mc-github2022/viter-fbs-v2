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
  // get data
  $home_banner->home_banner_aid = $_GET['home_bannerid'];
  checkId($home_banner->home_banner_aid);

  $query = checkDelete($home_banner);

  returnSuccess($home_banner, "banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
