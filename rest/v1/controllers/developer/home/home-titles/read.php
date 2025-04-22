<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new HomeTitles($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("home_titlesid", $_GET)) {
  $title->title_aid = $_GET['home_titlesid'];
  checkId($title->title_aid);
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
