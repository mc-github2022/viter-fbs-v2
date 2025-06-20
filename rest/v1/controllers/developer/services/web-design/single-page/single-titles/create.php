<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new SinglepageTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateSinglepageTitle = $data['isUpdateSinglepageTitle'] ?? '';

// Set common fields
$title->singlepage_titles_created = date("Y-m-d H:i:s");
$title->singlepage_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateSinglepageTitle == "scopeTitleUpdate") {
    $title->singlepage_titles_overview_subtitle = $data["singlepage_titles_overview_subtitle"];
    $title->singlepage_titles_overview_title = $data["singlepage_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateSinglepageTitle == "packagesTitleUpdate") {
    $title->singlepage_titles_packages_subtitle = $data["singlepage_titles_packages_subtitle"];
    $title->singlepage_titles_packages_title = $data["singlepage_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateSinglepageTitle == "partnersTitleUpdate") {
    $title->singlepage_titles_partners_subtitle = $data["singlepage_titles_partners_subtitle"];
    $title->singlepage_titles_partners_title = $data["singlepage_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}


// Return response
returnSuccess($title, "singlepage title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
