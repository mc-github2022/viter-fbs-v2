<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new AssetTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("asset_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateAssetTitle = $data['isUpdateAssetTitle'];


  if ($isUpdateAssetTitle == "scopeTitleUpdate") {
    $title->asset_titles_aid = $_GET['asset_titlesid'];
    $title->asset_titles_overview_subtitle = $data["asset_titles_overview_subtitle"];
    $title->asset_titles_overview_title = $data["asset_titles_overview_title"];

    $title->asset_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->asset_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateAssetTitle == "packagesTitleUpdate") {
    $title->asset_titles_aid = $_GET['asset_titlesid'];
    $title->asset_titles_packages_subtitle = $data["asset_titles_packages_subtitle"];
    $title->asset_titles_packages_title = $data["asset_titles_packages_title"];

    $title->asset_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->asset_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }


  returnSuccess($title, "asset titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
