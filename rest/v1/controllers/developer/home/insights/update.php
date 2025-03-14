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
  $home_insights->home_insights_aid = $_GET['home_insightsid'];
  $home_insights->home_insights_is_active = $data["home_insights_is_active"];
  $home_insights->home_insights_img = $data["home_insights_img"];
  $home_insights->home_insights_category = $data["home_insights_category"];
  $home_insights->home_insights_title = $data["home_insights_title"];
  $home_insights->home_insights_slug =  checkIndex($data, "home_insights_slug");
  $home_insights->home_insights_date = $data["home_insights_date"];
  $home_insights->home_insights_paragraph_a = $data["home_insights_paragraph_a"];
  $home_insights->home_insights_paragraph_b = $data["home_insights_paragraph_b"];
  $home_insights->home_insights_paragraph_c = $data["home_insights_paragraph_c"];
  $home_insights->home_insights_cta_is_active = $data["home_insights_cta_is_active"];
  $home_insights->home_insights_cta_text = $data["home_insights_cta_text"];
  if($data["home_insights_cta_text"]===""){
    $home_insights->home_insights_cta_text = "dafault-receiver";
  }else{
    $home_insights->home_insights_form_selected = $data["home_insights_form_selected"];
  }

  $home_insights->home_insights_datetime = date("Y-m-d H:i:s");
  checkId($home_insights->home_insights_aid);

  $home_insights_img_old = $data["home_insights_img_old"];
  $pendingDeleteFile = $data['pendingDeleteFile'];
  // UPLOAD FILE TO GOOGLDE DRIVE  
  $home_insights->home_insights_img = checkToUploadGoogleDrive(
    $home_insights->home_insights_img, // FILES
    $home_insights_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $home_insights->home_insights_img = checkDeleteGoogleDriveApiFiles(
    $home_insights->home_insights_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );


  // update
  $query = checkUpdate($home_insights);
  returnSuccess($home_insights, "insights", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
