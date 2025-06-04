<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new OjtTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ojt_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateOjtTitle = $data['isUpdateOjtTitle'];


  if ($isUpdateOjtTitle == "partnersTitleUpdate") {
    $title->ojt_titles_aid = $_GET['ojt_titlesid'];
    $title->ojt_titles_partners_subtitle = $data["ojt_titles_partners_subtitle"];
    $title->ojt_titles_partners_title = $data["ojt_titles_partners_title"];

    $title->ojt_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->ojt_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateOjtTitle == "batchesTitleUpdate") {
    $title->ojt_titles_aid = $_GET['ojt_titlesid'];
    $title->ojt_titles_batches_subtitle = $data["ojt_titles_batches_subtitle"];
    $title->ojt_titles_batches_title = $data["ojt_titles_batches_title"];

    $title->ojt_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->ojt_titles_aid);
    // update
    $query = checkUpdateBatchesTitle($title);
  }
  if ($isUpdateOjtTitle == "vidTestimonialTitleUpdate") {
    $title->ojt_titles_aid = $_GET['ojt_titlesid'];
    $title->ojt_titles_vid_testimonial_subtitle = $data["ojt_titles_vid_testimonial_subtitle"];
    $title->ojt_titles_vid_testimonial_title = $data["ojt_titles_vid_testimonial_title"];

    $title->ojt_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->ojt_titles_aid);
    // update
    $query = checkUpdateVidTestimonialTitle($title);
  }
  if ($isUpdateOjtTitle == "partnerSaysTitleUpdate") {
    $title->ojt_titles_aid = $_GET['ojt_titlesid'];
    $title->ojt_titles_partnersays_subtitle = $data["ojt_titles_partnersays_subtitle"];
    $title->ojt_titles_partnersays_title = $data["ojt_titles_partnersays_title"];

    $title->ojt_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->ojt_titles_aid);
    // update
    $query = checkUpdatePartnerSaysTitle($title);
  }


  returnSuccess($title, "ojt titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
