<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new BookkeepingPackageTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("bookkeeping_titlesid", $_GET)) {
  $title->bookkeeping_title_aid = $_GET['bookkeeping_titlesid'];
  checkId($title->bookkeeping_title_aid);
  $query = checkReadAll($title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
