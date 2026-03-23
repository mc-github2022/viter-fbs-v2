<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_scope = new BookingScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("booking_scopeid", $_GET)) {
  $booking_scope->booking_scope_aid = $_GET['booking_scopeid'];
  checkId($booking_scope->booking_scope_aid);
  $query = checkReadAll($booking_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($booking_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
