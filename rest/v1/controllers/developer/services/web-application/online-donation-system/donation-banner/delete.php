<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_banner = new DonationBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("donation_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $donation_banner->donation_banner_aid = $_GET['donation_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($donation_banner->donation_banner_aid);
  $query = checkDelete($donation_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($donation_banner, "donation banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
