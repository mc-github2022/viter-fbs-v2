<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new WordpressTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateWordpressTitle = $data['isUpdateWordpressTitle'] ?? '';

// Set common fields
$title->wordpress_titles_created = date("Y-m-d H:i:s");
$title->wordpress_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateWordpressTitle == "scopeTitleUpdate") {
    $title->wordpress_titles_overview_subtitle = $data["wordpress_titles_overview_subtitle"];
    $title->wordpress_titles_overview_title = $data["wordpress_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdateWordpressTitle == "packagesTitleUpdate") {
    $title->wordpress_titles_packages_subtitle = $data["wordpress_titles_packages_subtitle"];
    $title->wordpress_titles_packages_title = $data["wordpress_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdateWordpressTitle == "partnersTitleUpdate") {
    $title->wordpress_titles_partners_subtitle = $data["wordpress_titles_partners_subtitle"];
    $title->wordpress_titles_partners_title = $data["wordpress_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateWordpressTitle == "portfolioTitleUpdate") {
    $title->wordpress_titles_portfolio_subtitle = $data["wordpress_titles_portfolio_subtitle"];
    $title->wordpress_titles_portfolio_title = $data["wordpress_titles_partners_title"];

    $query = checkCreatePortfolioTitle($title);
}
if ($isUpdateWordpressTitle == "testimonialTitleUpdate") {
    $title->wordpress_titles_testimonial_subtitle     = $data["wordpress_titles_testimonial_subtitle	"];
    $title->wordpress_titles_testimonial_title = $data["wordpress_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "wordpress title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
