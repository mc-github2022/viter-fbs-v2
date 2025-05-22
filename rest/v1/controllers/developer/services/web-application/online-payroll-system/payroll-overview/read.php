<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_overview = new PayrollOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("payroll_overviewid", $_GET)) {
  $payroll_overview->payroll_overview_aid = $_GET['payroll_overviewid'];
  checkId($payroll_overview->payroll_overview_aid);
  $query = checkReadAll($payroll_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($payroll_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
