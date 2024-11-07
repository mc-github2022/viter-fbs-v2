<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/vid-testimonial/VidTestimonial.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$vid_testimonial = new VidTestimonial($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        // get task id from query string
        $vid_testimonial->vid_testimonial_start = $_GET['start'];
        $vid_testimonial->vid_testimonial_total = 11;
        //check to see if task id in query string is not empty and is number, if not return json error
        checkLimitId($vid_testimonial->vid_testimonial_start, $vid_testimonial->vid_testimonial_total);

        $query = checkReadLimit($vid_testimonial);
        $total_result = checkReadAll($vid_testimonial);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $vid_testimonial->vid_testimonial_total,
            $vid_testimonial->vid_testimonial_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
