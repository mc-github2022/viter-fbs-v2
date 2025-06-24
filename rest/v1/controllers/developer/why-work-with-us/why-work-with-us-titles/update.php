<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_titles = new WorkTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("work_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateWorkTitle = $data['isUpdateWorkTitle'];

  if ($isUpdateWorkTitle == "partnersTitleUpdate") {

    $work_titles->work_titles_aid = $_GET['work_titlesid'];
    $work_titles->work_titles_partners_subtitle = $data["work_titles_partners_subtitle"];
    $work_titles->work_titles_partners_title = $data["work_titles_partners_title"];
    $work_titles->work_titles_datetime = date("Y-m-d H:i:s");

    checkId($work_titles->work_titles_aid);

    // update
    $query = checkUpdate($work_titles);
  }
  if ($isUpdateWorkTitle == "teamsTitleUpdate") {
    $work_titles->work_titles_aid = $_GET['work_titlesid'];
    $work_titles->work_titles_teams_subtitle = $data["work_titles_teams_subtitle"];
    $work_titles->work_titles_teams_title = $data["work_titles_teams_title"];
    $work_titles->work_titles_datetime = date("Y-m-d H:i:s");

    checkId($work_titles->work_titles_aid);
    // update
    $query = checkUpdateTeamsTitle($work_titles);
  }


  returnSuccess($work_titles, "work profile update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
