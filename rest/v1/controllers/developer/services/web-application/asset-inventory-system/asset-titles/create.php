<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new AssetTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateAssetTitle = $data['isUpdateAssetTitle'] ?? '';

// Set common fields
$title->asset_titles_created = date("Y-m-d H:i:s");
$title->asset_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateAssetTitle == "scopeTitleUpdate") {
    $title->asset_titles_overview_subtitle = $data["asset_titles_overview_subtitle"];
    $title->asset_titles_overview_title = $data["asset_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateAssetTitle == "packagesTitleUpdate") {
    $title->asset_titles_packages_subtitle = $data["asset_titles_packages_subtitle"];
    $title->asset_titles_packages_title = $data["asset_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}

// Return response
returnSuccess($title, "asset title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
