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
  // check data
  checkPayload($data);
  // get data
  $home_testimonial->home_testimonial_aid = $_GET['home_testimonialid'];
  $home_testimonial->home_testimonial_message = $data["home_testimonial_message"];
  $home_testimonial->home_testimonial_name = $data["home_testimonial_name"];
  $home_testimonial->home_testimonial_position = $data["home_testimonial_position"];
  $home_testimonial->home_testimonial_client_img = $data["home_testimonial_client_img"];
  $home_testimonial->home_testimonial_logo_img = $data["home_testimonial_logo_img"];
  $home_testimonial->home_testimonial_datetime = date("Y-m-d H:i:s");

  $home_testimonial_client_img_old = $data["home_testimonial_client_img_old"];
  $home_testimonial_logo_img_old = $data["home_testimonial_logo_img_old"];

  checkId($home_testimonial->home_testimonial_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $home_testimonial->home_testimonial_client_img = checkToUploadGoogleDrive(
    $home_testimonial->home_testimonial_client_img, // FILES
    $home_testimonial_client_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $home_testimonial->home_testimonial_client_img = checkDeleteGoogleDriveApiFiles(
    $home_testimonial->home_testimonial_client_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $home_testimonial->home_testimonial_logo_img = checkToUploadGoogleDrive(
    $home_testimonial->home_testimonial_logo_img, // FILES
    $home_testimonial_logo_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $home_testimonial->home_testimonial_logo_img = checkDeleteGoogleDriveApiFiles(
    $home_testimonial->home_testimonial_logo_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($home_testimonial);
  returnSuccess($home_testimonial, "testimonials", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
