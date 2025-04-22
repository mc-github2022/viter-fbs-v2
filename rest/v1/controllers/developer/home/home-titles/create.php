<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new HomeTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateHomeTitle = $data['isUpdateHomeTitle'] ?? '';

// Set common fields
$title->title_created = date("Y-m-d H:i:s");
$title->title_datetime = date("Y-m-d H:i:s");


if ($isUpdateHomeTitle == "testimonialTitleUpdate") {
    $title->title_testimonial_a = $data["title_testimonial_a"];
    $title->title_testimonial_b = $data["title_testimonial_b"];
    $title->title_description = $data["title_description"];

    $query = checkCreate($title);
}
if ($isUpdateHomeTitle == "partnersTitleUpdate") {
    $title->title_partners_a = $data["title_partners_a"];
    $title->title_partners_b = $data["title_partners_b"];
    $title->title_partners_description = $data["title_partners_description"];

    $query = checkCreatePartnersTitle($title);
}
if ($isUpdateHomeTitle == "insightsTitleUpdate") {
    $title->title_subtitle_insights_a = $data["title_subtitle_insights_a"];
    $title->title_subtitle_insights_b = $data["title_subtitle_insights_b"];
    $title->title_insights = $data["title_insights"];

    $query = checkCreateInsightsTitle($title);
}

// Return response
returnSuccess($title, "home title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
