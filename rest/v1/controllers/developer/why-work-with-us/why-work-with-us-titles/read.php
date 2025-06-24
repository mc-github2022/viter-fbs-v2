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
  $work_titles->work_titles_aid = $_GET['work_titlesid'];
  checkId($work_titles->work_titles_aid);
  $query = checkReadAll($work_titles);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($work_titles);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
