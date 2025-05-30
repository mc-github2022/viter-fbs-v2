<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_overview = new BookkeepingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("bookkeeping_overviewid", $_GET)) {
  $bookkeeping_overview->bookkeeping_overview_aid = $_GET['bookkeeping_overviewid'];
  checkId($bookkeeping_overview->bookkeeping_overview_aid);
  $query = checkReadAll($bookkeeping_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($bookkeeping_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
