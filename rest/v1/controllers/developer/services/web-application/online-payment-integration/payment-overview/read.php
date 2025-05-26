<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_overview = new PaymentOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("payment_overviewid", $_GET)) {
  $payment_overview->payment_overview_aid = $_GET['payment_overviewid'];
  checkId($payment_overview->payment_overview_aid);
  $query = checkReadAll($payment_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($payment_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
