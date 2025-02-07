<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$encrypt = new Encryption();
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("subscribeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $subscribe->subscriber_aid = $_GET['subscribeid'];
  $subscribe->subscriber_email = checkIndex($data, "subscriber_email");
  $subscribe->subscriber_audience_id = checkIndex($data, "subscriber_audience_id");
  $subscribe->subscriber_key = $encrypt->doHash(rand());
  $subscribe->subscriber_datetime = date("Y-m-d H:i:s");
  checkId($subscribe->subscriber_aid);


  //checks current data to avoid same entries from being updated
  $subscriber_email_old = strtolower($data["subscriber_email_old"]);
  $subscriber_audience_id_old = $data["subscriber_audience_id_old"];
  // email and audience cannot be the same
  compareTwoValues(
    $subscribe,
    $subscriber_email_old,
    $subscribe->subscriber_email,
    $subscriber_audience_id_old,
    $subscribe->subscriber_audience_id,

  );

  // update
  $query = checkUpdate($subscribe);
  returnSuccess($subscribe, "subscribe", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
