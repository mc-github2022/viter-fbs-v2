<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new SocialMediaTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("social_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateSocialTitle = $data['isUpdateSocialTitle'];


  if ($isUpdateSocialTitle == "packagesTitleUpdate") {
    $title->social_titles_aid = $_GET['social_titlesid'];
    $title->social_titles_packages_subtitle = $data["social_titles_packages_subtitle"];
    $title->social_titles_packages_title = $data["social_titles_packages_title"];

    $title->social_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->social_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateSocialTitle == "partnersTitleUpdate") {
    $title->social_titles_aid = $_GET['social_titlesid'];
    $title->social_titles_partners_subtitle = $data["social_titles_partners_subtitle"];
    $title->social_titles_partners_title = $data["social_titles_partners_title"];

    $title->social_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->social_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateSocialTitle == "testimonialTitleUpdate") {
    $title->social_titles_aid = $_GET['social_titlesid'];
    $title->social_titles_testimonial_subtitle = $data["social_titles_testimonial_subtitle"];
    $title->social_titles_testimonial_title = $data["social_titles_testimonial_title"];

    $title->social_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->social_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "social titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
