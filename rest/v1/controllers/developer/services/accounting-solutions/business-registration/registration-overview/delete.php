<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_overview = new RegistrationOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("registration_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $registration_overview->registration_overview_aid = $_GET['registration_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($registration_overview->registration_overview_aid);
  $query = checkDelete($registration_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($registration_overview, "registration overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
