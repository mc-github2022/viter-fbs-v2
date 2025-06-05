<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new ImmersionTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateImmersionTitle = $data['isUpdateImmersionTitle'] ?? '';

// Set common fields
$title->immersion_titles_created = date("Y-m-d H:i:s");
$title->immersion_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateImmersionTitle == "partnersTitleUpdate") {
    $title->immersion_titles_partners_subtitle = $data["immersion_titles_partners_subtitle"];
    $title->immersion_titles_partners_title = $data["immersion_titles_partners_title"];

    $query = checkCreate($title);
}
if ($isUpdateImmersionTitle == "batchesTitleUpdate") {
    $title->immersion_titles_batches_subtitle = $data["immersion_titles_batches_subtitle"];
    $title->immersion_titles_batches_title = $data["immersion_titles_batches_title"];

    $query = checkCreateBatchesTitle($title);
}
if ($isUpdateImmersionTitle == "vidTestimonialTitleUpdate") {
    $title->immersion_titles_vid_testimonial_subtitle = $data["immersion_titles_vid_testimonial_subtitle"];
    $title->immersion_titles_vid_testimonial_title = $data["immersion_titles_vid_testimonial_title"];

    $query = checkCreateVidTestimonialTitle($title);
}
if ($isUpdateImmersionTitle == "partnerSaysTitleUpdate") {
    $title->immersion_titles_vid_testimonial_title = $data["immersion_titles_vid_testimonial_title"];
    $title->immersion_titles_partnersays_title = $data["immersion_titles_partnersays_title"];

    $query = checkCreatePartnerSaysTitle($title);
}

// Return response
returnSuccess($title, "immersion title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
