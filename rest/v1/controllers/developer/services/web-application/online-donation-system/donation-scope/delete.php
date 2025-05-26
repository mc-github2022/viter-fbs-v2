<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_scope = new DonationScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("donation_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $donation_scope->donation_scope_aid = $_GET['donation_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($donation_scope->donation_scope_aid);
  $query = checkDelete($donation_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($donation_scope, "donation banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
