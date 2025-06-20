<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new WebsiteTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateWebsiteTitle = $data['isUpdateWebsiteTitle'] ?? '';

// Set common fields
$title->website_titles_created = date("Y-m-d H:i:s");
$title->website_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateWebsiteTitle == "scopeTitleUpdate") {
    $title->website_titles_overview_subtitle = $data["website_titles_overview_subtitle"];
    $title->website_titles_overview_title = $data["website_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateWebsiteTitle == "packagesTitleUpdate") {
    $title->website_titles_packages_subtitle = $data["website_titles_packages_subtitle"];
    $title->website_titles_packages_title = $data["website_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateWebsiteTitle == "partnersTitleUpdate") {
    $title->website_titles_partners_subtitle = $data["website_titles_partners_subtitle"];
    $title->website_titles_partners_title = $data["website_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateWebsiteTitle == "testimonialTitleUpdate") {
    $title->website_titles_testimonial_subtitle     = $data["website_titles_testimonial_subtitle	"];
    $title->website_titles_testimonial_title = $data["website_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "website title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
