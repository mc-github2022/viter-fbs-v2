<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_wordpress = new ContactFormWordpress($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("contact_form_wordpress_id", $_GET)) {
  $form_wordpress->form_wordpress_aid = $_GET['contact_form_wordpress_id'];
  checkId($form_wordpress->form_wordpress_aid);
  $query = checkReadAll($form_wordpress);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($form_wordpress);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
