<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lcss_teams = new LcssTeam($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("lcss_teamsid", $_GET)) {
  // get data
  checkPayload($data);

  $lcss_teams->lcss_teams_aid = $_GET['lcss_teamsid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($lcss_teams->lcss_teams_aid);
  $query = checkDelete($lcss_teams);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($lcss_teams, "delete ojt apply now", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
