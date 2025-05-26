<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_overview = new DonationOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("donation_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $donation_overview->donation_overview_aid = $_GET['donation_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($donation_overview->donation_overview_aid);
  $query = checkDelete($donation_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($donation_overview, "donation overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
