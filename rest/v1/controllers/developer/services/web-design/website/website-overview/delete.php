<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_overview = new WebsiteOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("website_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $website_overview->website_overview_aid = $_GET['website_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($website_overview->website_overview_aid);
  $query = checkDelete($website_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($website_overview, "website overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
