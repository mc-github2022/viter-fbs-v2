<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_careers = new ContactFormCareers($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("contact_form_careers_id", $_GET)) {
  $form_careers->form_careers_aid = $_GET['contact_form_careers_id'];
  checkId($form_careers->form_careers_aid);
  $query = checkReadAll($form_careers);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($form_careers);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
