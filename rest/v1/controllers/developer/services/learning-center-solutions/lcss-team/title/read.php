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
  $teams_title->teams_title_aid = $_GET['teams_titlesid'];
  checkId($teams_title->teams_title_aid);
  $query = checkReadAll($teams_title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($teams_title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
