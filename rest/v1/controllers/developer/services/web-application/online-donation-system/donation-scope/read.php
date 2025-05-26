<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_scope = new DonationScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("donation_scopeid", $_GET)) {
  $donation_scope->donation_scope_aid = $_GET['donation_scopeid'];
  checkId($donation_scope->donation_scope_aid);
  $query = checkReadAll($donation_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($donation_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
