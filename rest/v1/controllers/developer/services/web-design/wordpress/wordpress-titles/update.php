<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new WordpressTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("wordpress_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateWordpressTitle = $data['isUpdateWordpressTitle'];


  if ($isUpdateWordpressTitle == "scopeTitleUpdate") {
    $title->wordpress_titles_aid = $_GET['wordpress_titlesid'];
    $title->wordpress_titles_overview_subtitle = $data["wordpress_titles_overview_subtitle"];
    $title->wordpress_titles_overview_title = $data["wordpress_titles_overview_title"];

    $title->wordpress_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->wordpress_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateWordpressTitle == "packagesTitleUpdate") {
    $title->wordpress_titles_aid = $_GET['wordpress_titlesid'];
    $title->wordpress_titles_packages_subtitle = $data["wordpress_titles_packages_subtitle"];
    $title->wordpress_titles_packages_title = $data["wordpress_titles_packages_title"];

    $title->wordpress_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->wordpress_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateWordpressTitle == "partnersTitleUpdate") {
    $title->wordpress_titles_aid = $_GET['wordpress_titlesid'];
    $title->wordpress_titles_partners_subtitle = $data["wordpress_titles_partners_subtitle"];
    $title->wordpress_titles_partners_title = $data["wordpress_titles_partners_title"];

    $title->wordpress_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->wordpress_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateWordpressTitle == "testimonialTitleUpdate") {
    $title->wordpress_titles_aid = $_GET['wordpress_titlesid'];
    $title->wordpress_titles_testimonial_subtitle = $data["wordpress_titles_testimonial_subtitle"];
    $title->wordpress_titles_testimonial_title = $data["wordpress_titles_testimonial_title"];

    $title->wordpress_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->wordpress_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "wordpress titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
