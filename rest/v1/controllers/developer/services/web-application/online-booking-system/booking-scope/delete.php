<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_scope = new BookingScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("booking_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $booking_scope->booking_scope_aid = $_GET['booking_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($booking_scope->booking_scope_aid);
  $query = checkDelete($booking_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($booking_scope, "booking banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
