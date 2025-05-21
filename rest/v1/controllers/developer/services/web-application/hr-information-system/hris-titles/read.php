<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new HrisTitles($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("hris_titlesid", $_GET)) {
  $title->hris_titles_aid = $_GET['hris_titlesid'];
  checkId($title->hris_titles_aid);
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
