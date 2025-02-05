<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$audience = new Audience($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("audienceId", $_GET)) {
  // get data
  $audience->audience_aid = $_GET['audienceId'];
  checkId($audience->audience_aid);
  isAssociatedSubscriberAudienceName($audience);

  $query = checkDelete($audience);

  returnSuccess($audience, "audience", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
