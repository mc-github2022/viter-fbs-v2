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
  // check data
  checkPayload($data);
  // get data
  $industry_testimonial->industry_testimonial_aid = $_GET['industry_testimonialid'];
  $industry_testimonial->industry_testimonial_img = $data["industry_testimonial_img"];
  $industry_testimonial->industry_testimonial_logo = $data["industry_testimonial_logo"];
  $industry_testimonial->industry_testimonial_name = $data["industry_testimonial_name"];
  $industry_testimonial->industry_testimonial_position =  $data["industry_testimonial_position"];
  $industry_testimonial->industry_testimonial_message = $data["industry_testimonial_message"];
  $industry_testimonial->industry_testimonial_company = $data["industry_testimonial_company"];
  $industry_testimonial->industry_testimonial_category = checkIndex($data, "industry_testimonial_category");

  $industry_testimonial->industry_testimonial_datetime = date("Y-m-d H:i:s");
  checkId($industry_testimonial->industry_testimonial_aid);


  // //checks current data to avoid same entries from being updated
  // $user_industry_testimonial_fname_old = checkIndex($data, 'user_industry_testimonial_fname_old');
  // compareName($industry_testimonial, $user_industry_testimonial_fname_old, $industry_testimonial->user_industry_testimonial_fname);

  // update
  $query = checkUpdate($industry_testimonial);
  returnSuccess($industry_testimonial, "indTestimonial", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
