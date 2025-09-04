<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_overview = new SocialMediaOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("social_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $social_overview->social_overview_aid = $_GET['social_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($social_overview->social_overview_aid);
  $query = checkDelete($social_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($social_overview, "social overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
