<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new MarketingTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateMarketingTitle = $data['isUpdateMarketingTitle'] ?? '';

// Set common fields
$title->marketing_titles_created = date("Y-m-d H:i:s");
$title->marketing_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateMarketingTitle == "packagesTitleUpdate") {
    $title->marketing_titles_packages_subtitle = $data["marketing_titles_packages_subtitle"];
    $title->marketing_titles_packages_title = $data["marketing_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateMarketingTitle == "partnersTitleUpdate") {
    $title->marketing_titles_partners_subtitle = $data["marketing_titles_partners_subtitle"];
    $title->marketing_titles_partners_title = $data["marketing_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateMarketingTitle == "testimonialTitleUpdate") {
    $title->marketing_titles_testimonial_subtitle = $data["marketing_titles_testimonial_subtitle"];
    $title->marketing_titles_testimonial_title = $data["marketing_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "marketing title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
