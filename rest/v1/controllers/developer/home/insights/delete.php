<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_insights = new Insights($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("home_insightsid", $_GET)) {
  // get data
  checkPayload($data);

  $home_insights->home_insights_aid = $_GET['home_insightsid'];
  $filesToDelete = $data['filesToDelete'];
  checkId($home_insights->home_insights_aid);

  $query = checkDelete($home_insights);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($home_insights, "insights", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
