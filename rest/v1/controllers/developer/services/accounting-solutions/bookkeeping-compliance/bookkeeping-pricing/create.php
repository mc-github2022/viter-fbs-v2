<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new BookkeepingPackageTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateBookkeepingTitle = $data['isUpdateBookkeepingTitle'] ?? '';

// Set common fields
$title->bookkeeping_title_created = date("Y-m-d H:i:s");
$title->bookkeeping_title_datetime = date("Y-m-d H:i:s");


if ($isUpdateBookkeepingTitle == "packagesTitleUpdate") {
    $title->bookkeeping_title_packages_subtitle = $data["bookkeeping_title_packages_subtitle"];
    $title->bookkeeping_title_packages_title = $data["bookkeeping_title_packages_title"];

    $query = checkCreate($title);
}
if ($isUpdateBookkeepingTitle == "packagesListUpdate") {
    $title->bookkeeping_scope_title = $data["bookkeeping_scope_title"];
    $title->bookkeeping_services_title_a = $data["bookkeeping_services_title_a"];
    $title->bookkeeping_services_list_a = $data["bookkeeping_services_list_a"];
    $title->bookkeeping_services_title_b = $data["bookkeeping_services_title_b"];
    $title->bookkeeping_services_list_b = $data["bookkeeping_services_list_b"];
    $title->bookkeeping_services_title_c = $data["bookkeeping_services_title_c"];
    $title->bookkeeping_services_list_c = $data["bookkeeping_services_list_c"];

    $query = checkcreatePackagesList($title);
}

// Return response
returnSuccess($title, "registration title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
