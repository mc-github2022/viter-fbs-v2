<?php
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
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        // get task id from query string
        $events_activities->events_activities_start = $_GET['start'];
        $events_activities->events_activities_total = 10;
        //check to see if task id in query string is not empty and is number, if not return json error
        checkLimitId($events_activities->events_activities_start, $events_activities->events_activities_total);

        $query = checkReadLimit($events_activities);
        $total_result = checkReadAll($events_activities);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $events_activities->events_activities_total,
            $events_activities->events_activities_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
