<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new BusinessTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("business_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateBusinessTitle = $data['isUpdateBusinessTitle'];


  if ($isUpdateBusinessTitle == "packagesTitleUpdate") {
    $title->business_titles_aid = $_GET['business_titlesid'];
    $title->business_titles_packages_subtitle = $data["business_titles_packages_subtitle"];
    $title->business_titles_packages_title = $data["business_titles_packages_title"];

    $title->business_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->business_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateBusinessTitle == "partnersTitleUpdate") {
    $title->business_titles_aid = $_GET['business_titlesid'];
    $title->business_titles_partners_subtitle = $data["business_titles_partners_subtitle"];
    $title->business_titles_partners_title = $data["business_titles_partners_title"];

    $title->business_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->business_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateBusinessTitle == "testimonialTitleUpdate") {
    $title->business_titles_aid = $_GET['business_titlesid'];
    $title->business_titles_testimonial_subtitle = $data["business_titles_testimonial_subtitle"];
    $title->business_titles_testimonial_title = $data["business_titles_testimonial_title"];

    $title->business_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->business_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "business titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
