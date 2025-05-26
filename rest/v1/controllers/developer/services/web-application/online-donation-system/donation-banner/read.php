<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_banner = new DonationBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("donation_bannerid", $_GET)) {
  $donation_banner->donation_banner_aid = $_GET['donation_bannerid'];
  checkId($donation_banner->donation_banner_aid);
  $query = checkReadAll($donation_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($donation_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
