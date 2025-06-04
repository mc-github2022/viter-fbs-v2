<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_lcss = new ContactFormLcss($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("contact_form_lcss_id", $_GET)) {
  $form_lcss->form_lcss_aid = $_GET['contact_form_lcss_id'];
  checkId($form_lcss->form_lcss_aid);
  $query = checkReadAll($form_lcss);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($form_lcss);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
