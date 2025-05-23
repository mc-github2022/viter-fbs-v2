<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new EnrollmentTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("enrollment_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateEnrollmentTitle = $data['isUpdateEnrollmentTitle'];


  if ($isUpdateEnrollmentTitle == "scopeTitleUpdate") {
    $title->enrollment_titles_aid = $_GET['enrollment_titlesid'];
    $title->enrollment_titles_overview_subtitle = $data["enrollment_titles_overview_subtitle"];
    $title->enrollment_titles_overview_title = $data["enrollment_titles_overview_title"];

    $title->enrollment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->enrollment_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateEnrollmentTitle == "packagesTitleUpdate") {
    $title->enrollment_titles_aid = $_GET['enrollment_titlesid'];
    $title->enrollment_titles_packages_subtitle = $data["enrollment_titles_packages_subtitle"];
    $title->enrollment_titles_packages_title = $data["enrollment_titles_packages_title"];

    $title->enrollment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->enrollment_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateEnrollmentTitle == "partnersTitleUpdate") {
    $title->enrollment_titles_aid = $_GET['enrollment_titlesid'];
    $title->enrollment_titles_partners_subtitle = $data["enrollment_titles_partners_subtitle"];
    $title->enrollment_titles_partners_title = $data["enrollment_titles_partners_title"];

    $title->enrollment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->enrollment_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateEnrollmentTitle == "testimonialTitleUpdate") {
    $title->enrollment_titles_aid = $_GET['enrollment_titlesid'];
    $title->enrollment_titles_testimonial_subtitle = $data["enrollment_titles_testimonial_subtitle"];
    $title->enrollment_titles_testimonial_title = $data["enrollment_titles_testimonial_title"];

    $title->enrollment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->enrollment_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "enrollment titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
