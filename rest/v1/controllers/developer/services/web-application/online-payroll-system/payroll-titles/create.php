<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new PayrollTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdatepayrollTitle = $data['isUpdatepayrollTitle'] ?? '';

// Set common fields
$title->payroll_titles_created = date("Y-m-d H:i:s");
$title->payroll_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdatepayrollTitle == "scopeTitleUpdate") {
    $title->payroll_titles_overview_subtitle = $data["payroll_titles_overview_subtitle"];
    $title->payroll_titles_overview_title = $data["payroll_titles_overview_title"];

    $query = checkCreate($title);
}
if ($isUpdatepayrollTitle == "packagesTitleUpdate") {
    $title->payroll_titles_packages_subtitle = $data["payroll_titles_packages_subtitle"];
    $title->payroll_titles_packages_title = $data["payroll_titles_packages_title"];

    $query = checkCreatePackagesTitle($title);
}
if ($isUpdatepayrollTitle == "partnersTitleUpdate") {
    $title->payroll_titles_partners_subtitle = $data["payroll_titles_partners_subtitle"];
    $title->payroll_titles_partners_title = $data["payroll_titles_partners_title"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdatepayrollTitle == "testimonialTitleUpdate") {
    $title->payroll_titles_testimonial_subtitle     = $data["payroll_titles_testimonial_subtitle	"];
    $title->payroll_titles_testimonial_title = $data["payroll_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "payroll title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
