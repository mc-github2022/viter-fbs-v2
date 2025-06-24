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
  // check data
  checkPayload($data);
  // get data

  $isUpdateEventsTitle = $data['isUpdateEventsTitle'];

  if ($isUpdateEventsTitle == "eventsTitleUpdate") {

    $events_title->events_title_aid = $_GET['events_titleid'];
    $events_title->events_title_subtitle_a = $data["events_title_subtitle_a"];
    $events_title->events_title_title = $data["events_title_title"];
    $events_title->events_title_subtitle_b = $data["events_title_subtitle_b"];
    $events_title->events_title_datetime = date("Y-m-d H:i:s");

    checkId($events_title->events_title_aid);

    // update
    $query = checkUpdate($events_title);
  }

  returnSuccess($events_title, "work banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
