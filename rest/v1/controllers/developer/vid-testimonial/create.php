<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$vid_testimonial = new VidTestimonial($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$vid_testimonial->vid_testimonial_category = checkIndex($data, "vid_testimonial_category");
$vid_testimonial->vid_testimonial_vid_link = $data["vid_testimonial_vid_link"];
$vid_testimonial->vid_testimonial_logo_img = $data["vid_testimonial_logo_img"];
$vid_testimonial->vid_testimonial_name = $data["vid_testimonial_name"];
$vid_testimonial->vid_testimonial_course = $data["vid_testimonial_course"];
$vid_testimonial->vid_testimonial_school = $data["vid_testimonial_school"];
$vid_testimonial->vid_testimonial_message = $data["vid_testimonial_message"];
$vid_testimonial->vid_testimonial_created = date("Y-m-d H:i:s");
$vid_testimonial->vid_testimonial_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
// isNameExist($vid_testimonial, $vid_testimonial->vid_testimonial_name);

$query = checkCreate($vid_testimonial);

returnSuccess($vid_testimonial, "vidTestimonial", $query);
