<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new MarketingTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("marketing_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateMarketingTitle = $data['isUpdateMarketingTitle'];


  if ($isUpdateMarketingTitle == "packagesTitleUpdate") {
    $title->marketing_titles_aid = $_GET['marketing_titlesid'];
    $title->marketing_titles_packages_subtitle = $data["marketing_titles_packages_subtitle"];
    $title->marketing_titles_packages_title = $data["marketing_titles_packages_title"];

    $title->marketing_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->marketing_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateMarketingTitle == "partnersTitleUpdate") {
    $title->marketing_titles_aid = $_GET['marketing_titlesid'];
    $title->marketing_titles_partners_subtitle = $data["marketing_titles_partners_subtitle"];
    $title->marketing_titles_partners_title = $data["marketing_titles_partners_title"];

    $title->marketing_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->marketing_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateMarketingTitle == "testimonialTitleUpdate") {
    $title->marketing_titles_aid = $_GET['marketing_titlesid'];
    $title->marketing_titles_testimonial_subtitle = $data["marketing_titles_testimonial_subtitle"];
    $title->marketing_titles_testimonial_title = $data["marketing_titles_testimonial_title"];

    $title->marketing_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->marketing_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "marketing titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
