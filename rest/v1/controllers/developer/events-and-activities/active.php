<?php
// set http header
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/events-and-activities/EventsAndActivities.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$events_activities = new EventsAndActivities($conn);
$response = new Response();
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("events_activitiesid", $_GET)) {
        // check data
        checkPayload($data);

        $events_activities->events_activities_aid = $_GET['events_activitiesid'];
        $events_activities->events_activities_is_active = trim($data["isActive"]);
        $events_activities->events_activities_datetime = date("Y-m-d H:i:s");

        checkId($events_activities->events_activities_aid);
        $query = checkActive($events_activities);
        http_response_code(200);
        returnSuccess($events_activities, "eventsAndAct", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
