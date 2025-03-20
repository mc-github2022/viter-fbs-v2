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
  $filesToDelete = $data['filesToDelete'];
  checkId($events_activities->events_activities_aid);

  $query = checkDelete($events_activities);


  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($events_activities, "eventsAndAct", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
