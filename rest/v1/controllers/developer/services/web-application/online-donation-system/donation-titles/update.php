<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new DonationTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("donation_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateDonationTitle = $data['isUpdateDonationTitle'];


  if ($isUpdateDonationTitle == "scopeTitleUpdate") {
    $title->donation_titles_aid = $_GET['donation_titlesid'];
    $title->donation_titles_overview_subtitle = $data["donation_titles_overview_subtitle"];
    $title->donation_titles_overview_title = $data["donation_titles_overview_title"];

    $title->donation_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->donation_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateDonationTitle == "packagesTitleUpdate") {
    $title->donation_titles_aid = $_GET['donation_titlesid'];
    $title->donation_titles_packages_subtitle = $data["donation_titles_packages_subtitle"];
    $title->donation_titles_packages_title = $data["donation_titles_packages_title"];

    $title->donation_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->donation_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateDonationTitle == "partnersTitleUpdate") {
    $title->donation_titles_aid = $_GET['donation_titlesid'];
    $title->donation_titles_partners_subtitle = $data["donation_titles_partners_subtitle"];
    $title->donation_titles_partners_title = $data["donation_titles_partners_title"];

    $title->donation_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->donation_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateDonationTitle == "testimonialTitleUpdate") {
    $title->donation_titles_aid = $_GET['donation_titlesid'];
    $title->donation_titles_testimonial_subtitle = $data["donation_titles_testimonial_subtitle"];
    $title->donation_titles_testimonial_title = $data["donation_titles_testimonial_title"];

    $title->donation_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->donation_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "donation titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
