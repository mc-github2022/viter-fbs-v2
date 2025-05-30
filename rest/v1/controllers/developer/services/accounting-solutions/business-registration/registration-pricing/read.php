<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new RegistrationPackageTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("registration_titlesid", $_GET)) {
  $title->registration_title_aid = $_GET['registration_titlesid'];
  checkId($title->registration_title_aid);
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
