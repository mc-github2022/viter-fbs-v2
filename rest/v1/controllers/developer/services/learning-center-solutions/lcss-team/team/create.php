<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lcss_teams = new LcssTeam($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$lcss_teams->lcss_teams_name = $data["lcss_teams_name"];
$lcss_teams->lcss_teams_role = $data["lcss_teams_role"];
$lcss_teams->lcss_teams_position = $data["lcss_teams_position"];
$lcss_teams->lcss_teams_email = $data["lcss_teams_email"];
$lcss_teams->lcss_teams_img = $data["lcss_teams_img"];
$lcss_teams->lcss_teams_created = date("Y-m-d H:i:s");
$lcss_teams->lcss_teams_datetime = date("Y-m-d H:i:s");


$lcss_teams_img_old = $data["lcss_teams_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$lcss_teams->lcss_teams_img = checkToUploadGoogleDrive(
    $lcss_teams->lcss_teams_img, // FILES
    $lcss_teams_img_old, // OLD FILES
);

$query = checkCreate($lcss_teams);

returnSuccess($lcss_teams, "create lcss team", $query);
