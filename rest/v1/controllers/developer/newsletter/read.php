<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$newsletter = new Newsletter($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("newsletterId", $_GET)) {
  $newsletter->newsletter_aid = $_GET['newsletterId'];
  checkId($newsletter->newsletter_aid);
  $query = checkReadAll($newsletter);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($newsletter);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
