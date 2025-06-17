<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_overview = new MarketingOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("marketing_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $marketing_overview->marketing_overview_aid = $_GET['marketing_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($marketing_overview->marketing_overview_aid);
  $query = checkDelete($marketing_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($marketing_overview, "marketing overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
