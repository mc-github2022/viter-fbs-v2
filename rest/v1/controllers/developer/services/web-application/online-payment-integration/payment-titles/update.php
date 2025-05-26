<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new PaymentTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payment_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdatePaymentTitle = $data['isUpdatePaymentTitle'];


  if ($isUpdatePaymentTitle == "scopeTitleUpdate") {
    $title->payment_titles_aid = $_GET['payment_titlesid'];
    $title->payment_titles_overview_subtitle = $data["payment_titles_overview_subtitle"];
    $title->payment_titles_overview_title = $data["payment_titles_overview_title"];

    $title->payment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payment_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdatePaymentTitle == "packagesTitleUpdate") {
    $title->payment_titles_aid = $_GET['payment_titlesid'];
    $title->payment_titles_packages_subtitle = $data["payment_titles_packages_subtitle"];
    $title->payment_titles_packages_title = $data["payment_titles_packages_title"];

    $title->payment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payment_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdatePaymentTitle == "partnersTitleUpdate") {
    $title->payment_titles_aid = $_GET['payment_titlesid'];
    $title->payment_titles_partners_subtitle = $data["payment_titles_partners_subtitle"];
    $title->payment_titles_partners_title = $data["payment_titles_partners_title"];

    $title->payment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payment_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdatePaymentTitle == "testimonialTitleUpdate") {
    $title->payment_titles_aid = $_GET['payment_titlesid'];
    $title->payment_titles_testimonial_subtitle = $data["payment_titles_testimonial_subtitle"];
    $title->payment_titles_testimonial_title = $data["payment_titles_testimonial_title"];

    $title->payment_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payment_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "payment titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
