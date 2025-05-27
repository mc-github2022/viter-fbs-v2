<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$newsletter = new Newsletter($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$newsletter->newsletter_is_active = 1;
$newsletter->newsletter_subject = checkIndex($data, "newsletter_subject");
$newsletter->newsletter_content = $data["newsletter_content"];
$newsletter->newsletter_created = date("Y-m-d H:i:s");
$newsletter->newsletter_datetime = date("Y-m-d H:i:s");


$query = checkCreate($newsletter);

returnSuccess($newsletter, "newsletter", $query);
