<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_profile = new WorkCompanyProfile($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("work_profileid", $_GET)) {
  // get data
  checkPayload($data);

  $work_profile->work_profile_aid = $_GET['work_profileid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($work_profile->work_profile_aid);
  $query = checkDelete($work_profile);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($work_profile, "ojt overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
