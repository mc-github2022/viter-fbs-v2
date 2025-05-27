<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_overview = new AssetOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("asset_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $assetOverviewUpdate = $data['assetOverviewUpdate'];

  if ($assetOverviewUpdate == "assetOverviewUpdateImg") {

    $asset_overview->asset_overview_aid = $_GET['asset_overviewid'];
    $asset_overview->asset_overview_subtitle = $data["asset_overview_subtitle"];
    $asset_overview->asset_overview_title = $data["asset_overview_title"];
    $asset_overview->asset_overview_button_text = $data["asset_overview_button_text"];
    $asset_overview->asset_overview_img = $data["asset_overview_img"];
    $asset_overview->asset_overview_datetime = date("Y-m-d H:i:s");

    $asset_overview_img_old = $data["asset_overview_img_old"];

    checkId($asset_overview->asset_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $asset_overview->asset_overview_img = checkToUploadGoogleDrive(
      $asset_overview->asset_overview_img, // FILES
      $asset_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $asset_overview->asset_overview_img = checkDeleteGoogleDriveApiFiles(
      $asset_overview->asset_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($asset_overview);
  }
  if ($assetOverviewUpdate == "assetOverviewListUpdate") {
    $asset_overview->asset_overview_aid = $_GET['asset_overviewid'];
    $asset_overview->asset_overview_list_title_a = $data["asset_overview_list_title_a"];
    $asset_overview->asset_overview_list_description_a = $data["asset_overview_list_description_a"];
    $asset_overview->asset_overview_list_title_b = $data["asset_overview_list_title_b"];
    $asset_overview->asset_overview_list_description_b = $data["asset_overview_list_description_b"];
    $asset_overview->asset_overview_list_title_c = $data["asset_overview_list_title_c"];
    $asset_overview->asset_overview_list_description_c = $data["asset_overview_list_description_c"];
    $asset_overview->asset_overview_datetime = date("Y-m-d H:i:s");

    checkId($asset_overview->asset_overview_aid);
    // update
    $query = checkUpdateOverviewList($asset_overview);
  }

  returnSuccess($asset_overview, "asset overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
