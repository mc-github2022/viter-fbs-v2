<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_vision = new WorkVisionMission($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("work_visionid", $_GET)) {
  $work_vision->work_vision_aid = $_GET['work_visionid'];
  checkId($work_vision->work_vision_aid);
  $query = checkReadAll($work_vision);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($work_vision);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
