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
  $lcss_teams->lcss_teams_aid = $_GET['home_lcss_teamsid'];
  checkId($lcss_teams->lcss_teams_aid);
  $query = checkReadAll($lcss_teams);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($lcss_teams);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
