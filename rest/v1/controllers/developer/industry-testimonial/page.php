<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/industry-testimonial/IndustryTestimonial.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$industry_testimonial = new IndustryTestimonial($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        // get task id from query string
        $industry_testimonial->industry_testimonial_start = $_GET['start'];
        $industry_testimonial->industry_testimonial_total = 11;
        //check to see if task id in query string is not empty and is number, if not return json error
        checkLimitId($industry_testimonial->industry_testimonial_start, $industry_testimonial->industry_testimonial_total);

        $query = checkReadLimit($industry_testimonial);
        $total_result = checkReadAll($industry_testimonial);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $industry_testimonial->industry_testimonial_total,
            $industry_testimonial->industry_testimonial_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
