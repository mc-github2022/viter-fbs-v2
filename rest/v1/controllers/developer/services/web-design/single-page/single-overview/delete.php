<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_overview = new SinglepageOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("singlepage_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $singlepage_overview->singlepage_overview_aid = $_GET['singlepage_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($singlepage_overview->singlepage_overview_aid);
  $query = checkDelete($singlepage_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($singlepage_overview, "singlepage overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
