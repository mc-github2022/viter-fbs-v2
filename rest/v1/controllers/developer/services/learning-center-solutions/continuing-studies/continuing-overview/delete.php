<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_overview = new ContinuingOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("continuing_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $continuing_overview->continuing_overview_aid = $_GET['continuing_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($continuing_overview->continuing_overview_aid);
  $query = checkDelete($continuing_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($continuing_overview, "continuing overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
