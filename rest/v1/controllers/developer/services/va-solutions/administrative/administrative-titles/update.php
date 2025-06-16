<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new AdministrativeTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("administrative_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateAdministrativeTitle = $data['isUpdateAdministrativeTitle'];


  if ($isUpdateAdministrativeTitle == "packagesTitleUpdate") {
    $title->administrative_titles_aid = $_GET['administrative_titlesid'];
    $title->administrative_titles_packages_subtitle = $data["administrative_titles_packages_subtitle"];
    $title->administrative_titles_packages_title = $data["administrative_titles_packages_title"];

    $title->administrative_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->administrative_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateAdministrativeTitle == "partnersTitleUpdate") {
    $title->administrative_titles_aid = $_GET['administrative_titlesid'];
    $title->administrative_titles_partners_subtitle = $data["administrative_titles_partners_subtitle"];
    $title->administrative_titles_partners_title = $data["administrative_titles_partners_title"];

    $title->administrative_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->administrative_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdateAdministrativeTitle == "testimonialTitleUpdate") {
    $title->administrative_titles_aid = $_GET['administrative_titlesid'];
    $title->administrative_titles_testimonial_subtitle = $data["administrative_titles_testimonial_subtitle"];
    $title->administrative_titles_testimonial_title = $data["administrative_titles_testimonial_title"];

    $title->administrative_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->administrative_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "administrative titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
