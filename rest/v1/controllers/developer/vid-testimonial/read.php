<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$vid_testimonial = new VidTestimonial($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("vid_testimonialid", $_GET)) {
  $vid_testimonial->vid_testimonial_aid = $_GET['vid_testimonialid'];
  checkId($vid_testimonial->vid_testimonial_aid);
  $query = checkReadAll($vid_testimonial);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($vid_testimonial);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
