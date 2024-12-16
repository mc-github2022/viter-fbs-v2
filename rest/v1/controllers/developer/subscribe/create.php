<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
// get should not be present
if (array_key_exists("subscribeid", $_GET)) {
    checkEndpoint();
}

// check data
checkPayload($data);
// get data
$subscribe->subscriber_email = checkIndex($data, "subscriber_email");
$subscribe->subscriber_is_active = 1;
$subscribe->subscriber_created = date("Y-m-d H:i:s");
$subscribe->subscriber_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
isEmailExist($subscribe, $subscribe->subscriber_email);

$query = checkCreate($subscribe);

returnSuccess($subscribe, "subscribe", $query);
