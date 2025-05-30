<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_overview = new RegistrationOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("registration_overviewid", $_GET)) {
  $registration_overview->registration_overview_aid = $_GET['registration_overviewid'];
  checkId($registration_overview->registration_overview_aid);
  $query = checkReadAll($registration_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($registration_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
