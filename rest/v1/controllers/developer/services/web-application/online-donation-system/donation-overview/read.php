<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_overview = new DonationOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("donation_overviewid", $_GET)) {
  $donation_overview->donation_overview_aid = $_GET['donation_overviewid'];
  checkId($donation_overview->donation_overview_aid);
  $query = checkReadAll($donation_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($donation_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
