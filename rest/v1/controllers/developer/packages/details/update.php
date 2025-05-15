<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_details = new PackagesDetails($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("packages_detailsId", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $packages_details->packages_details_aid = $_GET['packages_detailsId'];
  $packages_details->packages_details_title = checkIndex($data, "packages_details_title");
  $packages_details->packages_details_list_id = $data["packages_details_list_id"];
  $packages_details->packages_details_list = $data["packages_details_list"];
  $packages_details->packages_details_is_highlighted = $data["packages_details_is_highlighted"];
  $packages_details->packages_details_datetime = date("Y-m-d H:i:s");
  checkId($packages_details->packages_details_aid);


  // update
  $query = checkUpdate($packages_details);
  returnSuccess($packages_details, "packages_details", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
