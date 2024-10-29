<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$events_activities = new EventsAndActivities($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("events_activitiesid", $_GET)) {
  // get data
  $events_activities->events_activities_aid = $_GET['events_activitiesid'];
  checkId($events_activities->events_activities_aid);

  $query = checkDelete($events_activities);

  returnSuccess($events_activities, "eventsAndAct", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
