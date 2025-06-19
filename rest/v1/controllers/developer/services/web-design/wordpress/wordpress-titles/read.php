<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new WordpressTitles($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("wordpress_titlesid", $_GET)) {
  $title->wordpress_titles_aid = $_GET['wordpress_titlesid'];
  checkId($title->wordpress_titles_aid);
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
