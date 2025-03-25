<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$gallery = new Gallery($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("galleryid", $_GET)) {
  // get data
  $gallery->gallery_aid = $_GET['galleryid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($gallery->gallery_aid);

  $query = checkDelete($gallery);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($gallery, "gallery", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
