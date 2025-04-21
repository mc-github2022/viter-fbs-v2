<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_default = new ContactFormDefault($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("contact_form_default_id", $_GET)) {
  $form_default->form_default_aid = $_GET['contact_form_default_id'];
  checkId($form_default->form_default_aid);
  $query = checkReadAll($form_default);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($form_default);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
