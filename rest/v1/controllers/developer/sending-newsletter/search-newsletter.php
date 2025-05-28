<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/sending-newsletter/SendingNewsletter.php';
// get payload

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$sendingNewsletter = new SendingNewsletter($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  //checkApiKey();
  // check data
  checkPayload($data);
  $sendingNewsletter->subscriber_search = $data["searchValue"];

  $query = checkSearchNewsletter($sendingNewsletter);
  http_response_code(200);
  getQueriedData($query);
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
