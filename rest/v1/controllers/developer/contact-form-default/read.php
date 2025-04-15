<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partner_with_us = new HomePartnerWithUs($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("home_partner_with_usid", $_GET)) {
  $partner_with_us->partner_with_us_aid = $_GET['home_partner_with_usid'];
  checkId($partner_with_us->partner_with_us_aid);
  $query = checkReadAll($partner_with_us);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($partner_with_us);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
