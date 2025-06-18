<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_overview = new WordpressOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("wordpress_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $wordpressOverviewUpdate = $data['wordpressOverviewUpdate'];

  if ($wordpressOverviewUpdate == "wordpressOverviewUpdateImg") {

    $wordpress_overview->wordpress_overview_aid = $_GET['wordpress_overviewid'];
    $wordpress_overview->wordpress_overview_subtitle = $data["wordpress_overview_subtitle"];
    $wordpress_overview->wordpress_overview_title = $data["wordpress_overview_title"];
    $wordpress_overview->wordpress_overview_button_text = $data["wordpress_overview_button_text"];
    $wordpress_overview->wordpress_overview_img = $data["wordpress_overview_img"];
    $wordpress_overview->wordpress_overview_datetime = date("Y-m-d H:i:s");

    $wordpress_overview_img_old = $data["wordpress_overview_img_old"];

    checkId($wordpress_overview->wordpress_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $wordpress_overview->wordpress_overview_img = checkToUploadGoogleDrive(
      $wordpress_overview->wordpress_overview_img, // FILES
      $wordpress_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $wordpress_overview->wordpress_overview_img = checkDeleteGoogleDriveApiFiles(
      $wordpress_overview->wordpress_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($wordpress_overview);
  }
  if ($wordpressOverviewUpdate == "wordpressOverviewListUpdate") {
    $wordpress_overview->wordpress_overview_aid = $_GET['wordpress_overviewid'];
    $wordpress_overview->wordpress_overview_list_title_a = $data["wordpress_overview_list_title_a"];
    $wordpress_overview->wordpress_overview_list_description_a = $data["wordpress_overview_list_description_a"];
    $wordpress_overview->wordpress_overview_list_title_b = $data["wordpress_overview_list_title_b"];
    $wordpress_overview->wordpress_overview_list_description_b = $data["wordpress_overview_list_description_b"];
    $wordpress_overview->wordpress_overview_list_title_c = $data["wordpress_overview_list_title_c"];
    $wordpress_overview->wordpress_overview_list_description_c = $data["wordpress_overview_list_description_c"];
    $wordpress_overview->wordpress_overview_datetime = date("Y-m-d H:i:s");

    checkId($wordpress_overview->wordpress_overview_aid);
    // update
    $query = checkUpdateOverviewList($wordpress_overview);
  }

  returnSuccess($wordpress_overview, "wordpress overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
