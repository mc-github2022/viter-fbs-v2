<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$industry_testimonial = new IndustryTestimonial($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("industry_testimonialid", $_GET)) {
  // get data
  $industry_testimonial->industry_testimonial_aid = $_GET['industry_testimonialid'];
  checkId($industry_testimonial->industry_testimonial_aid);

  $query = checkDelete($industry_testimonial);

  returnSuccess($industry_testimonial, "indTestimonial", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
