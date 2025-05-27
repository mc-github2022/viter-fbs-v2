<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_banner = new AssetBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("asset_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $asset_banner->asset_banner_aid = $_GET['asset_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($asset_banner->asset_banner_aid);
  $query = checkDelete($asset_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($asset_banner, "asset banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
