<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_overview = new BookkeepingOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("bookkeeping_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $bookkeeping_overview->bookkeeping_overview_aid = $_GET['bookkeeping_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($bookkeeping_overview->bookkeeping_overview_aid);
  $query = checkDelete($bookkeeping_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($bookkeeping_overview, "bookkeeping overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
