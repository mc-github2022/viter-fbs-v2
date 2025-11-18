<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$events_activities = new EventsAndActivities($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$events_activities->events_activities_is_active = $data["events_activities_is_active"];
$events_activities->events_activities_img = $data["events_activities_img"];
$events_activities->events_activities_img_list = $data["events_activities_img_list"];
$events_activities->events_activities_category = $data["events_activities_category"];
$events_activities->events_activities_title = $data["events_activities_title"];
$events_activities->events_activities_slug =  checkIndex($data, "events_activities_slug");
$events_activities->events_activities_date = $data["events_activities_date"];
$events_activities->events_activities_description = $data["events_activities_description"];
$events_activities->events_activities_meta_img_url = $data["events_activities_meta_img_url"];
$events_activities->events_activities_meta_description = $data["events_activities_meta_description"];
$events_activities->events_activities_created = date("Y-m-d H:i:s");
$events_activities->events_activities_datetime = date("Y-m-d H:i:s");

$events_activities_img_old = $data["events_activities_img_old"];
$events_activities_img_list_old = $data["events_activities_img_list_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$events_activities->events_activities_img = checkToUploadGoogleDrive(
    $events_activities->events_activities_img, // FILES
    $events_activities_img_old, // OLD FILES
);

$events_activities->events_activities_img_list = checkToUploadGoogleDrive(
    $events_activities->events_activities_img_list, // FILES
    $events_activities_img_list_old, // OLD FILES
);

// //checks newly added data if it already exists
// isNameExist($events_activities, $events_activities->events_activities_name);

$query = checkCreate($events_activities);

returnSuccess($events_activities, "eventsAndAct", $query);
