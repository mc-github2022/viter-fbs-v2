<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_overview = new BookkeepingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("bookkeeping_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $bookkeepingOverviewUpdate = $data['bookkeepingOverviewUpdate'];

  if ($bookkeepingOverviewUpdate == "bookkeepingOverviewUpdateImg") {

    $bookkeeping_overview->bookkeeping_overview_aid = $_GET['bookkeeping_overviewid'];
    $bookkeeping_overview->bookkeeping_overview_subtitle = $data["bookkeeping_overview_subtitle"];
    $bookkeeping_overview->bookkeeping_overview_title = $data["bookkeeping_overview_title"];
    $bookkeeping_overview->bookkeeping_overview_img = $data["bookkeeping_overview_img"];
    $bookkeeping_overview->bookkeeping_overview_datetime = date("Y-m-d H:i:s");

    $bookkeeping_overview_img_old = $data["bookkeeping_overview_img_old"];

    checkId($bookkeeping_overview->bookkeeping_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $bookkeeping_overview->bookkeeping_overview_img = checkToUploadGoogleDrive(
      $bookkeeping_overview->bookkeeping_overview_img, // FILES
      $bookkeeping_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $bookkeeping_overview->bookkeeping_overview_img = checkDeleteGoogleDriveApiFiles(
      $bookkeeping_overview->bookkeeping_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($bookkeeping_overview);
  }
  if ($bookkeepingOverviewUpdate == "bookkeepingOverviewListUpdate") {
    $bookkeeping_overview->bookkeeping_overview_aid = $_GET['bookkeeping_overviewid'];
    $bookkeeping_overview->bookkeeping_overview_list_title_a = $data["bookkeeping_overview_list_title_a"];
    $bookkeeping_overview->bookkeeping_overview_list_description_a = $data["bookkeeping_overview_list_description_a"];
    $bookkeeping_overview->bookkeeping_overview_list_title_b = $data["bookkeeping_overview_list_title_b"];
    $bookkeeping_overview->bookkeeping_overview_list_description_b = $data["bookkeeping_overview_list_description_b"];
    $bookkeeping_overview->bookkeeping_overview_list_title_c = $data["bookkeeping_overview_list_title_c"];
    $bookkeeping_overview->bookkeeping_overview_list_description_c = $data["bookkeeping_overview_list_description_c"];
    $bookkeeping_overview->bookkeeping_overview_datetime = date("Y-m-d H:i:s");

    checkId($bookkeeping_overview->bookkeeping_overview_aid);
    // update
    $query = checkUpdateOverviewList($bookkeeping_overview);
  }

  returnSuccess($bookkeeping_overview, "bookkeeping overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
