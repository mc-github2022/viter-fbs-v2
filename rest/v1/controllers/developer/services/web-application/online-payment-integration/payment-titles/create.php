<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new PaymentTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdatePaymentTitle = $data['isUpdatePaymentTitle'] ?? '';

// Set common fields
$title->payment_titles_created = date("Y-m-d H:i:s");
$title->payment_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdatePaymentTitle == "scopeTitleUpdate") {
    $title->payment_titles_overview_subtitle = $data["payment_titles_overview_subtitle"];
    $title->payment_titles_overview_title = $data["payment_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdatePaymentTitle == "packagesTitleUpdate") {
    $title->payment_titles_packages_subtitle = $data["payment_titles_packages_subtitle"];
    $title->payment_titles_packages_title = $data["payment_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdatePaymentTitle == "partnersTitleUpdate") {
    $title->payment_titles_partners_subtitle = $data["payment_titles_partners_subtitle"];
    $title->payment_titles_partners_title = $data["payment_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdatePaymentTitle == "testimonialTitleUpdate") {
    $title->payment_titles_testimonial_subtitle     = $data["payment_titles_testimonial_subtitle	"];
    $title->payment_titles_testimonial_title = $data["payment_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "payment title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
