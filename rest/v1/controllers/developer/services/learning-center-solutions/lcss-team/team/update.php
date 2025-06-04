<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lcss_teams = new LcssTeam($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("lcss_teamsid", $_GET)) {
  // check data
  checkPayload($data);
  // get data


  $lcss_teams->lcss_teams_aid = $_GET['lcss_teamsid'];
  $lcss_teams->lcss_teams_name = $data["lcss_teams_name"];
  $lcss_teams->lcss_teams_role = $data["lcss_teams_role"];
  $lcss_teams->lcss_teams_position = $data["lcss_teams_position"];
  $lcss_teams->lcss_teams_email = $data["lcss_teams_email"];
  $lcss_teams->lcss_teams_img = $data["lcss_teams_img"];
  $lcss_teams->lcss_teams_datetime = date("Y-m-d H:i:s");

  $lcss_teams_img_old = $data["lcss_teams_img_old"];

  checkId($lcss_teams->lcss_teams_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $lcss_teams->lcss_teams_img = checkToUploadGoogleDrive(
    $lcss_teams->lcss_teams_img, // FILES
    $lcss_teams_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $lcss_teams->lcss_teams_img = checkDeleteGoogleDriveApiFiles(
    $lcss_teams->lcss_teams_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($lcss_teams);
}

returnSuccess($lcss_teams, "update lcss team", $query);


// return 404 error if endpoint not available
checkEndpoint();
