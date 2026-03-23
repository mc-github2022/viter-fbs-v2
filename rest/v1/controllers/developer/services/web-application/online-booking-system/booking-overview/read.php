<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_overview = new BookingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("booking_overviewid", $_GET)) {
  $booking_overview->booking_overview_aid = $_GET['booking_overviewid'];
  checkId($booking_overview->booking_overview_aid);
  $query = checkReadAll($booking_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($booking_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
