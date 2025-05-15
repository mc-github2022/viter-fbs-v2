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
  $packages_details->packages_details_aid = $_GET['packages_detailsId'];
  checkId($packages_details->packages_details_aid);
  $query = checkReadAll($packages_details);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($packages_details);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
