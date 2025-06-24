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
  // check data
  checkPayload($data);
  // get data

  $workVisionUpdate = $data['workVisionUpdate'];

  if ($workVisionUpdate == "workVisionMissionTitleUpdate") {

    $work_vision->work_vision_aid = $_GET['work_visionid'];
    $work_vision->work_vision_subtitle = $data["work_vision_subtitle"];
    $work_vision->work_vision_title = $data["work_vision_title"];
    $work_vision->work_vision_datetime = date("Y-m-d H:i:s");

    checkId($work_vision->work_vision_aid);

    // update
    $query = checkUpdate($work_vision);
  }
  if ($workVisionUpdate == "workVisionUpdate") {
    $work_vision->work_vision_aid = $_GET['work_visionid'];
    $work_vision->work_vision_vision_title = $data["work_vision_vision_title"];
    $work_vision->work_vision_vision_desc = $data["work_vision_vision_desc"];
    $work_vision->work_vision_datetime = date("Y-m-d H:i:s");

    checkId($work_vision->work_vision_aid);
    // update
    $query = checkUpdateVision($work_vision);
  }
  if ($workVisionUpdate == "workMissionUpdate") {
    $work_vision->work_vision_aid = $_GET['work_visionid'];
    $work_vision->work_vision_mission_title = $data["work_vision_mission_title"];
    $work_vision->work_vision_mission_desc = $data["work_vision_mission_desc"];

    $work_vision->work_vision_datetime = date("Y-m-d H:i:s");

    checkId($work_vision->work_vision_aid);
    // update
    $query = checkUpdateMission($work_vision);
  }
  if ($workVisionUpdate == "workCoreValuesUpdate") {
    $work_vision->work_vision_aid = $_GET['work_visionid'];
    $work_vision->work_vision_core_title = $data["work_vision_core_title"];
    $work_vision->work_vision_core_list = $data["work_vision_core_list"];
    $work_vision->work_vision_datetime = date("Y-m-d H:i:s");

    checkId($work_vision->work_vision_aid);
    // update
    $query = checkUpdateCoreValues($work_vision);
  }

  returnSuccess($work_vision, "work profile update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
