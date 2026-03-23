<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_banner = new BookingBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("booking_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $booking_banner->booking_banner_aid = $_GET['booking_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($booking_banner->booking_banner_aid);
  $query = checkDelete($booking_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($booking_banner, "booking banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
