<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new HrisTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("hris_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateHrisTitle = $data['isUpdateHrisTitle'];


  if ($isUpdateHrisTitle == "scopeTitleUpdate") {
    $title->hris_titles_aid = $_GET['hris_titlesid'];
    $title->hris_titles_overview_subtitle = $data["hris_titles_overview_subtitle"];
    $title->hris_titles_overview_title = $data["hris_titles_overview_title"];

    $title->hris_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->hris_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateHrisTitle == "packagesTitleUpdate") {
    $title->hris_titles_aid = $_GET['hris_titlesid'];
    $title->hris_titles_packages_subtitle = $data["hris_titles_packages_subtitle"];
    $title->hris_titles_packages_title = $data["hris_titles_packages_title"];

    $title->hris_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->hris_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateHrisTitle == "partnersTitleUpdate") {
    $title->hris_titles_aid = $_GET['hris_titlesid'];
    $title->hris_titles_partners_subtitle = $data["hris_titles_partners_subtitle"];
    $title->hris_titles_partners_title = $data["hris_titles_partners_title"];

    $title->hris_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->hris_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateHrisTitle == "testimonialTitleUpdate") {
    $title->hris_titles_aid = $_GET['hris_titlesid'];
    $title->hris_titles_testimonial_subtitle = $data["hris_titles_testimonial_subtitle"];
    $title->hris_titles_testimonial_title = $data["hris_titles_testimonial_title"];

    $title->hris_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->hris_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "hris titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
