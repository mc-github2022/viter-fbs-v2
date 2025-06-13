<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new ContinuingTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("continuing_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateContinuingTitle = $data['isUpdateContinuingTitle'];

  if ($isUpdateContinuingTitle == "batchesTitleUpdate") {
    $title->continuing_titles_aid = $_GET['continuing_titlesid'];
    $title->continuing_titles_batches_subtitle = $data["continuing_titles_batches_subtitle"];
    $title->continuing_titles_batches_title = $data["continuing_titles_batches_title"];

    $title->continuing_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->continuing_titles_aid);
    // update
    $query = checkUpdateBatchesTitle($title);
  }
  if ($isUpdateContinuingTitle == "vidTestimonialTitleUpdate") {
    $title->continuing_titles_aid = $_GET['continuing_titlesid'];
    $title->continuing_titles_vid_testimonial_subtitle = $data["continuing_titles_vid_testimonial_subtitle"];
    $title->continuing_titles_vid_testimonial_title = $data["continuing_titles_vid_testimonial_title"];

    $title->continuing_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->continuing_titles_aid);
    // update
    $query = checkUpdateVidTestimonialTitle($title);
  }
  if ($isUpdateContinuingTitle == "partnerSaysTitleUpdate") {
    $title->continuing_titles_aid = $_GET['continuing_titlesid'];
    $title->continuing_titles_partnersays_subtitle = $data["continuing_titles_partnersays_subtitle"];
    $title->continuing_titles_partnersays_title = $data["continuing_titles_partnersays_title"];

    $title->continuing_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->continuing_titles_aid);
    // update
    $query = checkUpdatePartnerSaysTitle($title);
  }


  returnSuccess($title, "continuing titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
