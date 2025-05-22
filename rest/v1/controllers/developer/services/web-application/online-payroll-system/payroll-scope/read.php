<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_scope = new PayrollScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("payroll_scopeid", $_GET)) {
  $payroll_scope->payroll_scope_aid = $_GET['payroll_scopeid'];
  checkId($payroll_scope->payroll_scope_aid);
  $query = checkReadAll($payroll_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($payroll_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
