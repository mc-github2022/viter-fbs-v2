<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new GraphicTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateGraphicTitle = $data['isUpdateGraphicTitle'] ?? '';

// Set common fields
$title->graphic_titles_created = date("Y-m-d H:i:s");
$title->graphic_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateGraphicTitle == "scopeTitleUpdate") {
    $title->graphic_titles_overview_title = $data["graphic_titles_overview_title"];

    $query = checkCreate($title);
}

if ($isUpdateGraphicTitle == "testimonialTitleUpdate") {
    $title->graphic_titles_testimonial_subtitle = $data["graphic_titles_testimonial_subtitle"];
    $title->graphic_titles_testimonial_title = $data["graphic_titles_testimonial_title"];

    $query = checkCreateTestimonialTitle($title);
}

// Return response
returnSuccess($title, "graphic title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
