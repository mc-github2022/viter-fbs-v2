<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$footer = new Footer($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("footerid", $_GET)) {
  $footer->footer_aid = $_GET['footerid'];
  checkId($footer->footer_aid);
  $query = checkReadAll($footer);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($footer);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
