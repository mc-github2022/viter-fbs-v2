<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new RegistrationPackageTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateRegistrationTitle = $data['isUpdateRegistrationTitle'] ?? '';

// Set common fields
$title->registration_title_created = date("Y-m-d H:i:s");
$title->registration_title_datetime = date("Y-m-d H:i:s");


if ($isUpdateRegistrationTitle == "packagesTitleUpdate") {
    $title->registration_title_packages_subtitle = $data["registration_title_packages_subtitle"];
    $title->registration_title_packages_title = $data["registration_title_packages_title"];

    $query = checkCreate($title);
}

// Return response
returnSuccess($title, "registration title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
