<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_banner = new AssetBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("asset_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateAsset = $data['isUpdateAsset'];

  if ($isUpdateAsset == "assetBannerUpdate") {

    $asset_banner->asset_banner_aid = $_GET['asset_bannerid'];
    $asset_banner->asset_banner_title = $data["asset_banner_title"];
    $asset_banner->asset_banner_title_bold = $data["asset_banner_title_bold"];
    $asset_banner->asset_banner_description = $data["asset_banner_description"];
    $asset_banner->asset_banner_button_text = $data["asset_banner_button_text"];
    $asset_banner->asset_banner_button_link = $data["asset_banner_button_link"];
    $asset_banner->asset_banner_img = $data["asset_banner_img"];
    $asset_banner->asset_banner_datetime = date("Y-m-d H:i:s");

    $asset_banner_img_old = $data["asset_banner_img_old"];

    checkId($asset_banner->asset_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $asset_banner->asset_banner_img = checkToUploadGoogleDrive(
      $asset_banner->asset_banner_img, // FILES
      $asset_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $asset_banner->asset_banner_img = checkDeleteGoogleDriveApiFiles(
      $asset_banner->asset_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($asset_banner);
  }

  returnSuccess($asset_banner, "asset banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
