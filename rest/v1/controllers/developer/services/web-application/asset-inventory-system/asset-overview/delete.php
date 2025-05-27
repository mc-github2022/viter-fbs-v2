<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_overview = new AssetOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("asset_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $asset_overview->asset_overview_aid = $_GET['asset_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($asset_overview->asset_overview_aid);
  $query = checkDelete($asset_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($asset_overview, "asset overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
