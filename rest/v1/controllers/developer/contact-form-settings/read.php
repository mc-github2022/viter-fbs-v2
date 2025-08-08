<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new Content($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("formcontentid", $_GET)) {
  $val->form_content_aid = $_GET['formcontentid'];
  checkId($val->form_content_aid);
  $query = checkReadAll($val);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($val);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
