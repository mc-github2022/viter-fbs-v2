<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new ImmersionTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("immersion_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateImmersionTitle = $data['isUpdateImmersionTitle'];


  if ($isUpdateImmersionTitle == "partnersTitleUpdate") {
    $title->immersion_titles_aid = $_GET['immersion_titlesid'];
    $title->immersion_titles_partners_subtitle = $data["immersion_titles_partners_subtitle"];
    $title->immersion_titles_partners_title = $data["immersion_titles_partners_title"];

    $title->immersion_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->immersion_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateImmersionTitle == "batchesTitleUpdate") {
    $title->immersion_titles_aid = $_GET['immersion_titlesid'];
    $title->immersion_titles_batches_subtitle = $data["immersion_titles_batches_subtitle"];
    $title->immersion_titles_batches_title = $data["immersion_titles_batches_title"];

    $title->immersion_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->immersion_titles_aid);
    // update
    $query = checkUpdateBatchesTitle($title);
  }
  if ($isUpdateImmersionTitle == "vidTestimonialTitleUpdate") {
    $title->immersion_titles_aid = $_GET['immersion_titlesid'];
    $title->immersion_titles_vid_testimonial_subtitle = $data["immersion_titles_vid_testimonial_subtitle"];
    $title->immersion_titles_vid_testimonial_title = $data["immersion_titles_vid_testimonial_title"];

    $title->immersion_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->immersion_titles_aid);
    // update
    $query = checkUpdateVidTestimonialTitle($title);
  }
  if ($isUpdateImmersionTitle == "partnerSaysTitleUpdate") {
    $title->immersion_titles_aid = $_GET['immersion_titlesid'];
    $title->immersion_titles_partnersays_subtitle = $data["immersion_titles_partnersays_subtitle"];
    $title->immersion_titles_partnersays_title = $data["immersion_titles_partnersays_title"];

    $title->immersion_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->immersion_titles_aid);
    // update
    $query = checkUpdatePartnerSaysTitle($title);
  }


  returnSuccess($title, "immersion titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
