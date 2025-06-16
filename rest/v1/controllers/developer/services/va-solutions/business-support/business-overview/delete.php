<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_overview = new BusinessOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("business_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $business_overview->business_overview_aid = $_GET['business_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($business_overview->business_overview_aid);
  $query = checkDelete($business_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($business_overview, "business overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
