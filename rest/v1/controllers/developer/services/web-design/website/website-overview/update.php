<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_overview = new WebsiteOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("website_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $websiteOverviewUpdate = $data['websiteOverviewUpdate'];

  if ($websiteOverviewUpdate == "websiteOverviewUpdateImg") {

    $website_overview->website_overview_aid = $_GET['website_overviewid'];
    $website_overview->website_overview_subtitle = $data["website_overview_subtitle"];
    $website_overview->website_overview_title = $data["website_overview_title"];
    $website_overview->website_overview_button_text = $data["website_overview_button_text"];
    $website_overview->website_overview_img = $data["website_overview_img"];
    $website_overview->website_overview_file = $data["website_overview_file"];
    $website_overview->website_overview_datetime = date("Y-m-d H:i:s");

    $website_overview_file_old = $data["website_overview_file_old"];
    $website_overview_img_old = $data["website_overview_img_old"];

    checkId($website_overview->website_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $website_overview->website_overview_img = checkToUploadGoogleDrive(
      $website_overview->website_overview_img, // FILES
      $website_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $website_overview->website_overview_img = checkDeleteGoogleDriveApiFiles(
      $website_overview->website_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $website_overview->website_overview_file = checkToUploadGoogleDrive(
      $website_overview->website_overview_file, // FILES
      $website_overview_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $website_overview->website_overview_file = checkDeleteGoogleDriveApiFiles(
      $website_overview->website_overview_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($website_overview);
  }
  if ($websiteOverviewUpdate == "websiteOverviewListUpdate") {
    $website_overview->website_overview_aid = $_GET['website_overviewid'];
    $website_overview->website_overview_list_title_a = $data["website_overview_list_title_a"];
    $website_overview->website_overview_list_description_a = $data["website_overview_list_description_a"];
    $website_overview->website_overview_list_title_b = $data["website_overview_list_title_b"];
    $website_overview->website_overview_list_description_b = $data["website_overview_list_description_b"];
    $website_overview->website_overview_list_title_c = $data["website_overview_list_title_c"];
    $website_overview->website_overview_list_description_c = $data["website_overview_list_description_c"];
    $website_overview->website_overview_datetime = date("Y-m-d H:i:s");

    checkId($website_overview->website_overview_aid);
    // update
    $query = checkUpdateOverviewList($website_overview);
  }

  returnSuccess($website_overview, "website overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
