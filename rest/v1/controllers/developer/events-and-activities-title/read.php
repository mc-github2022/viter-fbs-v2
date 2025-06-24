<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$events_title = new EventsAndActivitiesTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("events_titleid", $_GET)) {
  $events_title->events_title_aid = $_GET['events_titleid'];
  checkId($events_title->events_title_aid);
  $query = checkReadAll($events_title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($events_title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
