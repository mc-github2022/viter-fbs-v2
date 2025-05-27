<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_overview = new AssetOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$assetOverviewUpdate = $data['assetOverviewUpdate'] ?? '';

// Set common fields
$asset_overview->asset_overview_created = date("Y-m-d H:i:s");
$asset_overview->asset_overview_datetime = date("Y-m-d H:i:s");


if ($assetOverviewUpdate == "assetOverviewUpdateImg") {
    $asset_overview->asset_overview_subtitle = $data["asset_overview_subtitle"];
    $asset_overview->asset_overview_title = $data["asset_overview_title"];
    $asset_overview->asset_overview_button_text = $data["asset_overview_button_text"];
    $asset_overview->asset_overview_img = $data["asset_overview_img"];

    $asset_overview_img_old = $data["asset_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $asset_overview->asset_overview_img = checkToUploadGoogleDrive(
        $asset_overview->asset_overview_img, // FILES
        $asset_overview_img_old, // OLD FILES
    );

    $query = checkCreate($asset_overview);
}
if ($assetOverviewUpdate == "assetOverviewListUpdate") {
    $asset_overview->asset_overview_list_title_a = $data["asset_overview_list_title_a"];
    $asset_overview->asset_overview_list_description_a = $data["asset_overview_list_description_a"];
    $asset_overview->asset_overview_list_title_b = $data["asset_overview_list_title_b"];
    $asset_overview->asset_overview_list_description_b = $data["asset_overview_list_description_b"];
    $asset_overview->asset_overview_list_title_c = $data["asset_overview_list_title_c"];
    $asset_overview->asset_overview_list_description_c = $data["asset_overview_list_description_c"];

    $query = checkCreateOverviewList($asset_overview);
}


// Return response
returnSuccess($asset_overview, "asset overview create", $query);
