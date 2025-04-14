<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$process = new HomeProcess($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("home_processid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateHomeProcess = $data['isUpdateHomeProcess'];


  if ($isUpdateHomeProcess == "processTitleUpdate") {
    $process->process_aid = $_GET['home_processid'];
    $process->process_title = $data["process_title"];
    $process->process_subtitle = $data["process_subtitle"];

    $process->process_datetime = date("Y-m-d H:i:s");
    checkId($process->process_aid);

    // update
    $query = checkUpdate($process);
  }
  if ($isUpdateHomeProcess == "processAUpdate") {
    $process->process_aid = $_GET['home_processid'];
    $process->process_title_a = $data["process_title_a"];
    $process->process_description_a = $data["process_description_a"];

    $process->process_datetime = date("Y-m-d H:i:s");
    checkId($process->process_aid);
    // update
    $query = checkUpdateProcessA($process);
  }
  if ($isUpdateHomeProcess == "processBUpdate") {
    $process->process_aid = $_GET['home_processid'];
    $process->process_title_b = $data["process_title_b"];
    $process->process_description_b = $data["process_description_b"];

    $process->process_datetime = date("Y-m-d H:i:s");
    checkId($process->process_aid);
    // update
    $query = checkUpdateProcessB($process);
  }
  if ($isUpdateHomeProcess == "processCUpdate") {
    $process->process_aid = $_GET['home_processid'];
    $process->process_title_c = $data["process_title_c"];
    $process->process_description_c = $data["process_description_c"];

    $process->process_datetime = date("Y-m-d H:i:s");
    checkId($process->process_aid);
    // update
    $query = checkUpdateProcessC($process);
  }
  if ($isUpdateHomeProcess == "processDUpdate") {
    $process->process_aid = $_GET['home_processid'];
    $process->process_title_d = $data["process_title_d"];
    $process->process_description_d = $data["process_description_d"];

    $process->process_datetime = date("Y-m-d H:i:s");
    checkId($process->process_aid);
    // update
    $query = checkUpdateProcessD($process);
  }

  returnSuccess($process, "process", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
