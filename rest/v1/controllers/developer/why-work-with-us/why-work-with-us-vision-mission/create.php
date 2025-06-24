<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_vision = new WorkVisionMission($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$workVisionUpdate = $data['workVisionUpdate'] ?? '';

// Set common fields
$work_vision->work_vision_created = date("Y-m-d H:i:s");
$work_vision->work_vision_datetime = date("Y-m-d H:i:s");


if ($workVisionUpdate == "workVisionMissionTitleUpdate") {
    $work_vision->work_vision_subtitle = $data["work_vision_subtitle"];
    $work_vision->work_vision_title = $data["work_vision_title"];

    $query = checkCreate($work_vision);
}
if ($workVisionUpdate == "workVisionUpdate") {
    $work_vision->work_vision_vision_title = $data["work_vision_vision_title"];
    $work_vision->work_vision_vision_desc = $data["work_vision_vision_desc"];

    $query = checkCreateVision($work_vision);
}
if ($workVisionUpdate == "workMissionUpdate") {
    $work_vision->work_vision_mission_title = $data["work_vision_mission_title"];
    $work_vision->work_vision_mission_desc = $data["work_vision_mission_desc"];

    $query = checkCreateMission($work_vision);
}
if ($workVisionUpdate == "workCoreValuesUpdate") {
    $work_vision->work_vision_core_title = $data["work_vision_core_title"];
    $work_vision->work_vision_core_list = $data["work_vision_core_list"];

    $query = checkCreateCoreValues($work_vision);
}


// Return response
returnSuccess($work_vision, "work profile create", $query);
