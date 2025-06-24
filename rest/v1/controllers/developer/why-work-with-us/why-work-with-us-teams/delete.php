<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_teams = new WorkTeams($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("work_teamsid", $_GET)) {
  // get data
  checkPayload($data);

  $work_teams->work_teams_aid = $_GET['work_teamsid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($work_teams->work_teams_aid);
  $query = checkDelete($work_teams);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($work_teams, "work banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
