<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new AdministrativeTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateAdministrativeTitle = $data['isUpdateAdministrativeTitle'] ?? '';

// Set common fields
$title->administrative_titles_created = date("Y-m-d H:i:s");
$title->administrative_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateAdministrativeTitle == "packagesTitleUpdate") {
    $title->administrative_titles_packages_subtitle = $data["administrative_titles_packages_subtitle"];
    $title->administrative_titles_packages_title = $data["administrative_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateAdministrativeTitle == "partnersTitleUpdate") {
    $title->administrative_titles_partners_subtitle = $data["administrative_titles_partners_subtitle"];
    $title->administrative_titles_partners_title = $data["administrative_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateAdministrativeTitle == "testimonialTitleUpdate") {
    $title->administrative_titles_testimonial_subtitle     = $data["administrative_titles_testimonial_subtitle	"];
    $title->administrative_titles_testimonial_title = $data["administrative_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "administrative title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
