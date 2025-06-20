<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_banner = new WebsiteBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("website_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $website_banner->website_banner_aid = $_GET['website_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($website_banner->website_banner_aid);
  $query = checkDelete($website_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($website_banner, "website banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
