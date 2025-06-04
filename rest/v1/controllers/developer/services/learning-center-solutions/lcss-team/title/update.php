<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$teams_title = new LcssTeamTitle($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("teams_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateLcssTeamsTitle = $data['isUpdateLcssTeamsTitle'];


  if ($isUpdateLcssTeamsTitle == "lcssTeamsTitleUpdate") {
    $teams_title->teams_title_aid = $_GET['teams_titlesid'];
    $teams_title->teams_title_substitle_a = $data["teams_title_substitle_a"];
    $teams_title->teams_title_title = $data["teams_title_title"];
    $teams_title->teams_title_substitle_b = $data["teams_title_substitle_b"];

    $teams_title->teams_title_datetime = date("Y-m-d H:i:s");
    checkId($teams_title->teams_title_aid);

    // update
    $query = checkUpdate($teams_title);
  }

  returnSuccess($teams_title, "team title update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
