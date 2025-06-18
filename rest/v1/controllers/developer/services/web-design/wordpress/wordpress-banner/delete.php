<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_banner = new WordpressBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("wordpress_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $wordpress_banner->wordpress_banner_aid = $_GET['wordpress_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($wordpress_banner->wordpress_banner_aid);
  $query = checkDelete($wordpress_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($wordpress_banner, "wordpress banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
