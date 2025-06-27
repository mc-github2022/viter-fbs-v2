<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$careers_title = new CareersTitle($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("careers_titleid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateCareersTitle = $data['isUpdateCareersTitle'];

  if ($isUpdateCareersTitle == "careersTitleUpdate") {

    $careers_title->careers_title_aid = $_GET['careers_titleid'];
    $careers_title->careers_title_title = $data["careers_title_title"];
    $careers_title->careers_title_desc = $data["careers_title_desc"];
    $careers_title->careers_title_datetime = date("Y-m-d H:i:s");

    checkId($careers_title->careers_title_aid);

    // update
    $query = checkUpdate($careers_title);
  }

  returnSuccess($careers_title, "careers update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
