<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new ContinuingTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContinuingTitle = $data['isUpdateContinuingTitle'] ?? '';

// Set common fields
$title->continuing_titles_created = date("Y-m-d H:i:s");
$title->continuing_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateContinuingTitle == "batchesTitleUpdate") {
    $title->continuing_titles_batches_subtitle = $data["continuing_titles_batches_subtitle"];
    $title->continuing_titles_batches_title = $data["continuing_titles_batches_title"];

    $query = checkCreateBatchesTitle($title);
}
if ($isUpdateContinuingTitle == "vidTestimonialTitleUpdate") {
    $title->continuing_titles_vid_testimonial_subtitle = $data["continuing_titles_vid_testimonial_subtitle"];
    $title->continuing_titles_vid_testimonial_title = $data["continuing_titles_vid_testimonial_title"];

    $query = checkCreateVidTestimonialTitle($title);
}
if ($isUpdateContinuingTitle == "partnerSaysTitleUpdate") {
    $title->continuing_titles_vid_testimonial_title = $data["continuing_titles_vid_testimonial_title"];
    $title->continuing_titles_partnersays_title = $data["continuing_titles_partnersays_title"];

    $query = checkCreatePartnerSaysTitle($title);
}

// Return response
returnSuccess($title, "continuing title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
