<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$industry_testimonial = new IndustryTestimonial($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$industry_testimonial->industry_testimonial_img = $data["industry_testimonial_img"];
$industry_testimonial->industry_testimonial_logo = $data["industry_testimonial_logo"];
$industry_testimonial->industry_testimonial_name = $data["industry_testimonial_name"];
$industry_testimonial->industry_testimonial_position =  $data["industry_testimonial_position"];
$industry_testimonial->industry_testimonial_message = $data["industry_testimonial_message"];
$industry_testimonial->industry_testimonial_category = checkIndex($data, "industry_testimonial_category");
$industry_testimonial->industry_testimonial_created = date("Y-m-d H:i:s");
$industry_testimonial->industry_testimonial_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
// isNameExist($industry_testimonial, $industry_testimonial->industry_testimonial_name);

$query = checkCreate($industry_testimonial);

returnSuccess($industry_testimonial, "indTestimonial", $query);
