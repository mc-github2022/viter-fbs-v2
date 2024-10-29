<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_testimonial = new Testimonials($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("home_testimonialid", $_GET)) {
  $home_testimonial->home_testimonial_aid = $_GET['home_testimonialid'];
  checkId($home_testimonial->home_testimonial_aid);
  $query = checkReadAll($home_testimonial);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($home_testimonial);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
