<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$audience = new Audience($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$audience->audience_is_active = 1;
$audience->audience_name = checkIndex($data, "audience_name");
$audience->audience_description = $data["audience_description"];
$audience->audience_code = $data["audience_code"];
$audience->audience_created = date("Y-m-d H:i:s");
$audience->audience_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
isNameExist($audience, $audience->audience_name);

$query = checkCreate($audience);

returnSuccess($audience, "audience", $query);
