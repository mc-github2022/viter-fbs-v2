<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new BusinessTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateBusinessTitle = $data['isUpdateBusinessTitle'] ?? '';

// Set common fields
$title->business_titles_created = date("Y-m-d H:i:s");
$title->business_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateBusinessTitle == "packagesTitleUpdate") {
    $title->business_titles_packages_subtitle = $data["business_titles_packages_subtitle"];
    $title->business_titles_packages_title = $data["business_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateBusinessTitle == "partnersTitleUpdate") {
    $title->business_titles_partners_subtitle = $data["business_titles_partners_subtitle"];
    $title->business_titles_partners_title = $data["business_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateBusinessTitle == "testimonialTitleUpdate") {
    $title->business_titles_testimonial_subtitle     = $data["business_titles_testimonial_subtitle	"];
    $title->business_titles_testimonial_title = $data["business_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "business title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
