<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new EnrollmentTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateEnrollmentTitle = $data['isUpdateEnrollmentTitle'] ?? '';

// Set common fields
$title->enrollment_titles_created = date("Y-m-d H:i:s");
$title->enrollment_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateEnrollmentTitle == "scopeTitleUpdate") {
    $title->enrollment_titles_overview_subtitle = $data["enrollment_titles_overview_subtitle"];
    $title->enrollment_titles_overview_title = $data["enrollment_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateEnrollmentTitle == "packagesTitleUpdate") {
    $title->enrollment_titles_packages_subtitle = $data["enrollment_titles_packages_subtitle"];
    $title->enrollment_titles_packages_title = $data["enrollment_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateEnrollmentTitle == "partnersTitleUpdate") {
    $title->enrollment_titles_partners_subtitle = $data["enrollment_titles_partners_subtitle"];
    $title->enrollment_titles_partners_title = $data["enrollment_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateEnrollmentTitle == "testimonialTitleUpdate") {
    $title->enrollment_titles_testimonial_subtitle     = $data["enrollment_titles_testimonial_subtitle	"];
    $title->enrollment_titles_testimonial_title = $data["enrollment_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "enrollment title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
