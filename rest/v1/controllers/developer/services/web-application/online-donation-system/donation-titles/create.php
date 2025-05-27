<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new DonationTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateDonationTitle = $data['isUpdateDonationTitle'] ?? '';

// Set common fields
$title->donation_titles_created = date("Y-m-d H:i:s");
$title->donation_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateDonationTitle == "scopeTitleUpdate") {
    $title->donation_titles_overview_subtitle = $data["donation_titles_overview_subtitle"];
    $title->donation_titles_overview_title = $data["donation_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateDonationTitle == "packagesTitleUpdate") {
    $title->donation_titles_packages_subtitle = $data["donation_titles_packages_subtitle"];
    $title->donation_titles_packages_title = $data["donation_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateDonationTitle == "partnersTitleUpdate") {
    $title->donation_titles_partners_subtitle = $data["donation_titles_partners_subtitle"];
    $title->donation_titles_partners_title = $data["donation_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateDonationTitle == "testimonialTitleUpdate") {
    $title->donation_titles_testimonial_subtitle     = $data["donation_titles_testimonial_subtitle	"];
    $title->donation_titles_testimonial_title = $data["donation_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "donation title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
