<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new SinglepageTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("singlepage_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateSinglepageTitle = $data['isUpdateSinglepageTitle'];


  if ($isUpdateSinglepageTitle == "scopeTitleUpdate") {
    $title->singlepage_titles_aid = $_GET['singlepage_titlesid'];
    $title->singlepage_titles_overview_subtitle = $data["singlepage_titles_overview_subtitle"];
    $title->singlepage_titles_overview_title = $data["singlepage_titles_overview_title"];

    $title->singlepage_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->singlepage_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateSinglepageTitle == "packagesTitleUpdate") {
    $title->singlepage_titles_aid = $_GET['singlepage_titlesid'];
    $title->singlepage_titles_packages_subtitle = $data["singlepage_titles_packages_subtitle"];
    $title->singlepage_titles_packages_title = $data["singlepage_titles_packages_title"];

    $title->singlepage_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->singlepage_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }
  if ($isUpdateSinglepageTitle == "partnersTitleUpdate") {
    $title->singlepage_titles_aid = $_GET['singlepage_titlesid'];
    $title->singlepage_titles_partners_subtitle = $data["singlepage_titles_partners_subtitle"];
    $title->singlepage_titles_partners_title = $data["singlepage_titles_partners_title"];

    $title->singlepage_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->singlepage_titles_aid);
    // update
    $query = checkUpdatePartnersTitle($title);
  }



  returnSuccess($title, "singlepage titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
