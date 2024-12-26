<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("subscribeid", $_GET)) {
  // get data
  $subscribe->subscriber_aid = $_GET['subscribeid'];
  checkId($subscribe->subscriber_aid);

  $query = checkDelete($subscribe);

  returnSuccess($subscribe, "subscribe", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
