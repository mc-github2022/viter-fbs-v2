<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_banner = new PayrollBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("payroll_bannerid", $_GET)) {
  $payroll_banner->payroll_banner_aid = $_GET['payroll_bannerid'];
  checkId($payroll_banner->payroll_banner_aid);
  $query = checkReadAll($payroll_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($payroll_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
