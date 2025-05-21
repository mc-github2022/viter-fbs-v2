<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new HrisTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateHrisTitle = $data['isUpdateHrisTitle'] ?? '';

// Set common fields
$title->hris_titles_created = date("Y-m-d H:i:s");
$title->hris_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateHrisTitle == "scopeTitleUpdate") {
    $title->hris_titles_overview_subtitle = $data["hris_titles_overview_subtitle"];
    $title->hris_titles_overview_title = $data["hris_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateHrisTitle == "packagesTitleUpdate") {
    $title->hris_titles_packages_subtitle = $data["hris_titles_packages_subtitle"];
    $title->hris_titles_packages_title = $data["hris_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateHrisTitle == "partnersTitleUpdate") {
    $title->hris_titles_partners_subtitle = $data["hris_titles_partners_subtitle"];
    $title->hris_titles_partners_title = $data["hris_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateHrisTitle == "testimonialTitleUpdate") {
    $title->hris_titles_testimonial_subtitle     = $data["hris_titles_testimonial_subtitle	"];
    $title->hris_titles_testimonial_title = $data["hris_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "hris title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
