<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_banner = new RegistrationBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("registration_bannerid", $_GET)) {
  $registration_banner->registration_banner_aid = $_GET['registration_bannerid'];
  checkId($registration_banner->registration_banner_aid);
  $query = checkReadAll($registration_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($registration_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
