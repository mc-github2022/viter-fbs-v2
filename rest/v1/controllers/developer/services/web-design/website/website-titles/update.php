<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new WebsiteTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("website_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateWebsiteTitle = $data['isUpdateWebsiteTitle'];


  if ($isUpdateWebsiteTitle == "scopeTitleUpdate") {
    $title->website_titles_aid = $_GET['website_titlesid'];
    $title->website_titles_overview_subtitle = $data["website_titles_overview_subtitle"];
    $title->website_titles_overview_title = $data["website_titles_overview_title"];

    $title->website_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->website_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateWebsiteTitle == "packagesTitleUpdate") {
    $title->website_titles_aid = $_GET['website_titlesid'];
    $title->website_titles_packages_subtitle = $data["website_titles_packages_subtitle"];
    $title->website_titles_packages_title = $data["website_titles_packages_title"];

    $title->website_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->website_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateWebsiteTitle == "partnersTitleUpdate") {
    $title->website_titles_aid = $_GET['website_titlesid'];
    $title->website_titles_partners_subtitle = $data["website_titles_partners_subtitle"];
    $title->website_titles_partners_title = $data["website_titles_partners_title"];

    $title->website_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->website_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateWebsiteTitle == "testimonialTitleUpdate") {
    $title->website_titles_aid = $_GET['website_titlesid'];
    $title->website_titles_testimonial_subtitle = $data["website_titles_testimonial_subtitle"];
    $title->website_titles_testimonial_title = $data["website_titles_testimonial_title"];

    $title->website_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->website_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "website titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
