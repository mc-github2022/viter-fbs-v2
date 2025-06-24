<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$events_title = new EventsAndActivitiesTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateEventsTitle = $data['isUpdateEventsTitle'] ?? '';

if ($isUpdateEventsTitle == "eventsTitleUpdate") {

    $events_title->events_title_subtitle_a = $data["events_title_subtitle_a"];
    $events_title->events_title_title = $data["events_title_title"];
    $events_title->events_title_subtitle_b = $data["events_title_subtitle_b"];
    $events_title->events_title_created = date("Y-m-d H:i:s");
    $events_title->events_title_datetime = date("Y-m-d H:i:s");

    $query = checkCreate($events_title);
}

returnSuccess($events_title, "events title create", $query);
