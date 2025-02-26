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

  $industry_testimonial_img_old = $data["industry_testimonial_img_old"];
  $industry_testimonial_logo_old = $data["industry_testimonial_logo_old"];

  $industry_testimonial->industry_testimonial_datetime = date("Y-m-d H:i:s");
  checkId($industry_testimonial->industry_testimonial_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];


  // UPLOAD FILE TO GOOGLDE DRIVE  
  $industry_testimonial->industry_testimonial_img = checkToUploadGoogleDrive(
    $industry_testimonial->industry_testimonial_img, // FILES
    $industry_testimonial_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $industry_testimonial->industry_testimonial_img = checkDeleteGoogleDriveApiFiles(
    $industry_testimonial->industry_testimonial_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $industry_testimonial->industry_testimonial_logo = checkToUploadGoogleDrive(
    $industry_testimonial->industry_testimonial_logo, // FILES
    $industry_testimonial_logo_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $industry_testimonial->industry_testimonial_logo = checkDeleteGoogleDriveApiFiles(
    $industry_testimonial->industry_testimonial_logo, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($industry_testimonial);
  returnSuccess($industry_testimonial, "indTestimonial", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
