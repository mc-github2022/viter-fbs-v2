<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$newsletter = new Newsletter($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("newsletterId", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $newsletter->newsletter_aid = $_GET['newsletterId'];
  $newsletter->newsletter_subject = checkIndex($data, "newsletter_subject");
  $newsletter->newsletter_content = $data["newsletter_content"];
  $newsletter->newsletter_email_type = $data["newsletter_email_type"];
  $newsletter->newsletter_firstname_updated = $data["newsletter_firstname_updated"];
  $newsletter->newsletter_role_updated = $data["newsletter_role_updated"];
  $newsletter->newsletter_datetime = date("Y-m-d H:i:s");
  checkId($newsletter->newsletter_aid);

  // update
  $query = checkUpdate($newsletter);
  returnSuccess($newsletter, "newsletter", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
