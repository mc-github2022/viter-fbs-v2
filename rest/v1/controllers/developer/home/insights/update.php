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
  // check data
  checkPayload($data);
  // get data
  $home_insights->home_insights_is_active = $data["home_insights_is_active"];
  $home_insights->home_insights_aid = $_GET['home_insightsid'];
  $home_insights->home_insights_img = $data["home_insights_img"];
  $home_insights->home_insights_category = $data["home_insights_category"];
  $home_insights->home_insights_title = $data["home_insights_title"];
  $home_insights->home_insights_slug =  checkIndex($data, "home_insights_slug");
  $home_insights->home_insights_date = $data["home_insights_date"];
  $home_insights->home_insights_paragraph_a = $data["home_insights_paragraph_a"];
  $home_insights->home_insights_paragraph_b = $data["home_insights_paragraph_b"];
  $home_insights->home_insights_paragraph_c = $data["home_insights_paragraph_c"];

  $home_insights->home_insights_datetime = date("Y-m-d H:i:s");
  checkId($home_insights->home_insights_aid);


  // //checks current data to avoid same entries from being updated
  // $user_other_home_insights_fname_old = checkIndex($data, 'user_other_home_insights_fname_old');
  // compareName($home_insights, $user_other_home_insights_fname_old, $home_insights->user_other_home_insights_fname);

  // update
  $query = checkUpdate($home_insights);
  returnSuccess($home_insights, "insights", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
