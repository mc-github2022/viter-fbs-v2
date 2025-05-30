<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_banner = new BookkeepingBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("bookkeeping_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $bookkeeping_banner->bookkeeping_banner_aid = $_GET['bookkeeping_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($bookkeeping_banner->bookkeeping_banner_aid);
  $query = checkDelete($bookkeeping_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($bookkeeping_banner, "bookkeeping banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
