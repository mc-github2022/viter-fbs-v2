<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new PayrollTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payroll_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdatepayrollTitle = $data['isUpdatepayrollTitle'];


  if ($isUpdatepayrollTitle == "scopeTitleUpdate") {
    $title->payroll_titles_aid = $_GET['payroll_titlesid'];
    $title->payroll_titles_overview_subtitle = $data["payroll_titles_overview_subtitle"];
    $title->payroll_titles_overview_title = $data["payroll_titles_overview_title"];

    $title->payroll_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payroll_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdatepayrollTitle == "packagesTitleUpdate") {
    $title->payroll_titles_aid = $_GET['payroll_titlesid'];
    $title->payroll_titles_packages_subtitle = $data["payroll_titles_packages_subtitle"];
    $title->payroll_titles_packages_title = $data["payroll_titles_packages_title"];

    $title->payroll_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payroll_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdatepayrollTitle == "partnersTitleUpdate") {
    $title->payroll_titles_aid = $_GET['payroll_titlesid'];
    $title->payroll_titles_partners_subtitle = $data["payroll_titles_partners_subtitle"];
    $title->payroll_titles_partners_title = $data["payroll_titles_partners_title"];

    $title->payroll_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payroll_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }
  if ($isUpdatepayrollTitle == "testimonialTitleUpdate") {
    $title->payroll_titles_aid = $_GET['payroll_titlesid'];
    $title->payroll_titles_testimonial_subtitle = $data["payroll_titles_testimonial_subtitle"];
    $title->payroll_titles_testimonial_title = $data["payroll_titles_testimonial_title"];

    $title->payroll_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->payroll_titles_aid);
    // update
    $query = checkUpdateTestimonialTitle($title);
  }


  returnSuccess($title, "payroll titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
