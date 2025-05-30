<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new BookkeepingPackageTitle($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("bookkeeping_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateBookkeepingTitle = $data['isUpdateBookkeepingTitle'];


  if ($isUpdateBookkeepingTitle == "packagesTitleUpdate") {
    $title->bookkeeping_title_aid = $_GET['bookkeeping_titlesid'];
    $title->bookkeeping_title_packages_subtitle = $data["bookkeeping_title_packages_subtitle"];
    $title->bookkeeping_title_packages_title = $data["bookkeeping_title_packages_title"];

    $title->bookkeeping_title_datetime = date("Y-m-d H:i:s");
    checkId($title->bookkeeping_title_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateBookkeepingTitle == "packagesListUpdate") {
    $title->bookkeeping_title_aid = $_GET['bookkeeping_titlesid'];
    $title->bookkeeping_scope_title = $data["bookkeeping_scope_title"];
    $title->bookkeeping_services_title_a = $data["bookkeeping_services_title_a"];
    $title->bookkeeping_services_list_a = $data["bookkeeping_services_list_a"];
    $title->bookkeeping_services_title_b = $data["bookkeeping_services_title_b"];
    $title->bookkeeping_services_list_b = $data["bookkeeping_services_list_b"];
    $title->bookkeeping_services_title_c = $data["bookkeeping_services_title_c"];
    $title->bookkeeping_services_list_c = $data["bookkeeping_services_list_c"];

    $title->bookkeeping_title_datetime = date("Y-m-d H:i:s");
    checkId($title->bookkeeping_title_aid);

    // update
    $query = checkUpdatePackagesList($title);
  }

  returnSuccess($title, "bookkeeping titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
