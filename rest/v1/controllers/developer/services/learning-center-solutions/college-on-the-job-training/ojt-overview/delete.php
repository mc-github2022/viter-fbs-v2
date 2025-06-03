<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_overview = new OjtOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("ojt_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $ojt_overview->ojt_overview_aid = $_GET['ojt_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($ojt_overview->ojt_overview_aid);
  $query = checkDelete($ojt_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($ojt_overview, "ojt overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
