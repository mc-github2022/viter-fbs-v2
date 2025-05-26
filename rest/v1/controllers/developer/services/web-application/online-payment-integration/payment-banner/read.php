<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_banner = new PaymentBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("payment_bannerid", $_GET)) {
  $payment_banner->payment_banner_aid = $_GET['payment_bannerid'];
  checkId($payment_banner->payment_banner_aid);
  $query = checkReadAll($payment_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($payment_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
