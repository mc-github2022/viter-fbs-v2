<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new GraphicTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("graphic_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateGraphicTitle = $data['isUpdateGraphicTitle'];


  if ($isUpdateGraphicTitle == "scopeTitleUpdate") {
    $title->graphic_titles_aid = $_GET['graphic_titlesid'];
    $title->graphic_titles_overview_title = $data["graphic_titles_overview_title"];

    $title->graphic_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->graphic_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateGraphicTitle == "testimonialTitleUpdate") {
    $title->graphic_titles_aid = $_GET['graphic_titlesid'];
    $title->graphic_titles_testimonial_subtitle = $data["graphic_titles_testimonial_subtitle"];
    $title->graphic_titles_testimonial_title = $data["graphic_titles_testimonial_title"];

    $title->graphic_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->graphic_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "graphic titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
