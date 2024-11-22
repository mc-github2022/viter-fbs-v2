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
  // check data
  checkPayload($data);
  // get data
  $vid_testimonial->vid_testimonial_aid = $_GET['vid_testimonialid'];
  $vid_testimonial->vid_testimonial_category = checkIndex($data, "vid_testimonial_category");
  $vid_testimonial->vid_testimonial_vid_link = $data["vid_testimonial_vid_link"];
  $vid_testimonial->vid_testimonial_logo_img = $data["vid_testimonial_logo_img"];
  $vid_testimonial->vid_testimonial_name = $data["vid_testimonial_name"];
  $vid_testimonial->vid_testimonial_course = $data["vid_testimonial_course"];
  $vid_testimonial->vid_testimonial_school = $data["vid_testimonial_school"];
  $vid_testimonial->vid_testimonial_message = $data["vid_testimonial_message"];
  $vid_testimonial->vid_testimonial_datetime = date("Y-m-d H:i:s");
  checkId($vid_testimonial->vid_testimonial_aid);


  // //checks current data to avoid same entries from being updated
  // $user_other_vid_testimonial_fname_old = checkIndex($data, 'user_other_vid_testimonial_fname_old');
  // compareName($vid_testimonial, $user_other_vid_testimonial_fname_old, $vid_testimonial->user_other_vid_testimonial_fname);

  // update
  $query = checkUpdate($vid_testimonial);
  returnSuccess($vid_testimonial, "vidTestimonial", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
