<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_testimonial = new Testimonials($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$home_testimonial->home_testimonial_message = $data["home_testimonial_message"];
$home_testimonial->home_testimonial_name = $data["home_testimonial_name"];
$home_testimonial->home_testimonial_position = $data["home_testimonial_position"];
$home_testimonial->home_testimonial_client_img = $data["home_testimonial_client_img"];
$home_testimonial->home_testimonial_logo_img = $data["home_testimonial_logo_img"];
$home_testimonial->home_testimonial_created = date("Y-m-d H:i:s");
$home_testimonial->home_testimonial_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
// isNameExist($home_testimonial, $home_testimonial->home_testimonial_name);

$query = checkCreate($home_testimonial);

returnSuccess($home_testimonial, "testimonials", $query);
