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
  // check data
  checkPayload($data);
  // get data
  $audience->audience_aid = $_GET['audienceId'];
  $audience->audience_name = checkIndex($data, "audience_name");
  $audience->audience_description = $data["audience_description"];
  $audience->audience_notification_email_id = $data["audience_notification_email_id"];
  $audience->audience_notification_email = $data["audience_notification_email"];
  $audience->audience_datetime = date("Y-m-d H:i:s");
  checkId($audience->audience_aid);


  //checks current data to avoid same entries from being updated
  $audience_name_old = checkIndex($data, 'audience_name_old');
  compareName($audience, $audience_name_old, $audience->audience_name);

  // update
  $query = checkUpdate($audience);
  returnSuccess($audience, "audience", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
