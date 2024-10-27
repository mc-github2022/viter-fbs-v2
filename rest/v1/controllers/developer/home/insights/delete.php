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
  $home_insights->home_insights_aid = $_GET['home_insightsid'];
  checkId($home_insights->home_insights_aid);

  $query = checkDelete($home_insights);

  returnSuccess($home_insights, "insights", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
