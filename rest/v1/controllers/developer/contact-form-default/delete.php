<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partner_with_us = new HomePartnerWithUs($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("home_partner_with_usid", $_GET)) {
  // get data
  checkPayload($data);

  $partner_with_us->partner_with_us_aid = $_GET['home_partner_with_usid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($partner_with_us->partner_with_us_aid);
  $query = checkDelete($partner_with_us);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($partner_with_us, "partner with us", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
