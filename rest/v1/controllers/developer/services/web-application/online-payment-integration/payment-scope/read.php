<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_scope = new PaymentScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("payment_scopeid", $_GET)) {
  $payment_scope->payment_scope_aid = $_GET['payment_scopeid'];
  checkId($payment_scope->payment_scope_aid);
  $query = checkReadAll($payment_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($payment_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
