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
  // check data
  checkPayload($data);
  // get data
  $events_activities->events_activities_aid = $_GET['events_activitiesid'];
  $events_activities->events_activities_is_active = $data["events_activities_is_active"];
  $events_activities->events_activities_img = $data["events_activities_img"];
  $events_activities->events_activities_img_list = $data["events_activities_img_list"];
  $events_activities->events_activities_category = $data["events_activities_category"];
  $events_activities->events_activities_title = $data["events_activities_title"];
  $events_activities->events_activities_slug =  checkIndex($data, "events_activities_slug");
  $events_activities->events_activities_date = $data["events_activities_date"];
  $events_activities->events_activities_description = $data["events_activities_description"];

  $events_activities->events_activities_datetime = date("Y-m-d H:i:s");
  checkId($events_activities->events_activities_aid);


  // //checks current data to avoid same entries from being updated
  // $user_other_events_activities_fname_old = checkIndex($data, 'user_other_events_activities_fname_old');
  // compareName($events_activities, $user_other_events_activities_fname_old, $events_activities->user_other_events_activities_fname);

  // update
  $query = checkUpdate($events_activities);
  returnSuccess($events_activities, "eventsAndAct", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
