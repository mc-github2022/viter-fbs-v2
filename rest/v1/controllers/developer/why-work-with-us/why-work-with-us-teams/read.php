<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_teams = new WorkTeams($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("work_teamsid", $_GET)) {
  $work_teams->work_teams_aid = $_GET['work_teamsid'];
  checkId($work_teams->work_teams_aid);
  $query = checkReadAll($work_teams);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($work_teams);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
