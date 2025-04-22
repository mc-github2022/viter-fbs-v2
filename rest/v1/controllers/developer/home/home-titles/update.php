<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new HomeTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("home_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateHomeTitle = $data['isUpdateHomeTitle'];


  if ($isUpdateHomeTitle == "testimonialTitleUpdate") {
    $title->title_aid = $_GET['home_titlesid'];
    $title->title_testimonial_a = $data["title_testimonial_a"];
    $title->title_testimonial_b = $data["title_testimonial_b"];
    $title->title_description = $data["title_description"];

    $title->title_datetime = date("Y-m-d H:i:s");
    checkId($title->title_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateHomeTitle == "partnersTitleUpdate") {
    $title->title_aid = $_GET['home_titlesid'];
    $title->title_partners_a = $data["title_partners_a"];
    $title->title_partners_b = $data["title_partners_b"];
    $title->title_partners_description = $data["title_partners_description"];

    $title->title_datetime = date("Y-m-d H:i:s");
    checkId($title->title_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateHomeTitle == "insightsTitleUpdate") {
    $title->title_aid = $_GET['home_titlesid'];
    $title->title_subtitle_insights_a = $data["title_subtitle_insights_a"];
    $title->title_subtitle_insights_b = $data["title_subtitle_insights_b"];
    $title->title_insights = $data["title_insights"];

    $title->title_datetime = date("Y-m-d H:i:s");
    checkId($title->title_aid);
    // update
    $query = checkUpdateInsightsTitle($title);
  }


  returnSuccess($title, "home titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
