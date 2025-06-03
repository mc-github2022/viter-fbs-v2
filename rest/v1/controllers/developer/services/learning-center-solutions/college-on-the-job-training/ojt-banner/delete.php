<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_banner = new OjtBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("ojt_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $ojt_banner->ojt_banner_aid = $_GET['ojt_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($ojt_banner->ojt_banner_aid);
  $query = checkDelete($ojt_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($ojt_banner, "ojt banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
