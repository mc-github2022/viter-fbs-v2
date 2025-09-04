<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new SocialMediaTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateSocialTitle = $data['isUpdateSocialTitle'] ?? '';

// Set common fields
$title->social_titles_created = date("Y-m-d H:i:s");
$title->social_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateSocialTitle == "scopeTitleUpdate") {
    $title->social_titles_overview_subtitle = $data["social_titles_overview_subtitle"];
    $title->social_titles_overview_title = $data["social_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateSocialTitle == "packagesTitleUpdate") {
    $title->social_titles_packages_subtitle = $data["social_titles_packages_subtitle"];
    $title->social_titles_packages_title = $data["social_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateSocialTitle == "partnersTitleUpdate") {
    $title->social_titles_partners_subtitle = $data["social_titles_partners_subtitle"];
    $title->social_titles_partners_title = $data["social_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateSocialTitle == "testimonialTitleUpdate") {
    $title->social_titles_testimonial_subtitle = $data["social_titles_testimonial_subtitle"];
    $title->social_titles_testimonial_title = $data["social_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "social title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
