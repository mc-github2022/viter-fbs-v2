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
  checkPayload($data);

  $home_testimonial->home_testimonial_aid = $_GET['home_testimonialid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($home_testimonial->home_testimonial_aid);
  $query = checkDelete($home_testimonial);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($home_testimonial, "testimonials", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
