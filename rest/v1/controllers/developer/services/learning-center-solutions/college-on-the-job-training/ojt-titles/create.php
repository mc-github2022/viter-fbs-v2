<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new OjtTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateOjtTitle = $data['isUpdateOjtTitle'] ?? '';

// Set common fields
$title->ojt_titles_created = date("Y-m-d H:i:s");
$title->ojt_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateOjtTitle == "partnersTitleUpdate") {
    $title->ojt_titles_partners_subtitle = $data["ojt_titles_partners_subtitle"];
    $title->ojt_titles_partners_title = $data["ojt_titles_partners_title"];

    $query = checkCreate($title);
}
if ($isUpdateOjtTitle == "batchesTitleUpdate") {
    $title->ojt_titles_batches_subtitle = $data["ojt_titles_batches_subtitle"];
    $title->ojt_titles_batches_title = $data["ojt_titles_batches_title"];

    $query = checkCreateBatchesTitle($title);
}
if ($isUpdateOjtTitle == "vidTestimonialTitleUpdate") {
    $title->ojt_titles_vid_testimonial_subtitle = $data["ojt_titles_vid_testimonial_subtitle"];
    $title->ojt_titles_vid_testimonial_title = $data["ojt_titles_vid_testimonial_title"];

    $query = checkCreateVidTestimonialTitle($title);
}
if ($isUpdateOjtTitle == "partnerSaysTitleUpdate") {
    $title->ojt_titles_vid_testimonial_title = $data["ojt_titles_vid_testimonial_title"];
    $title->ojt_titles_partnersays_title = $data["ojt_titles_partnersays_title"];

    $query = checkCreatePartnerSaysTitle($title);
}

// Return response
returnSuccess($title, "ojt title create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
