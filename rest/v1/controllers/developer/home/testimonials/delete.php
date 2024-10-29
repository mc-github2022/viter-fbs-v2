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
  // get data
  $home_testimonial->home_testimonial_aid = $_GET['home_testimonialid'];
  checkId($home_testimonial->home_testimonial_aid);

  $query = checkDelete($home_testimonial);

  returnSuccess($home_testimonial, "testimonials", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
