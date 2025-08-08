<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new Content($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$val->form_content_page_id = $data["form_content_page_id"];
$val->form_content_purpose = $data["form_content_purpose"];
$val->form_content_portfolio = $data["form_content_portfolio"];
$val->form_content_title = $data["form_content_title"];
$val->form_content_subtitle = $data["form_content_subtitle"];
$val->form_content_is_upload_file = $data["form_content_is_upload_file"];
$val->form_content_is_subject_input = $data["form_content_is_subject_input"];
$val->form_content_details = $data["form_content_details"];
$val->form_content_created = date("Y-m-d H:i:s");
$val->form_content_updated = date("Y-m-d H:i:s");

$form_content_portfolio_old = $data["form_content_portfolio_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$val->form_content_portfolio = checkToUploadGoogleDrive(
    $val->form_content_portfolio, // FILES
    $form_content_portfolio_old, // OLD FILES
);

$query = checkCreate($val);


returnSuccess($val, "form content", $query);
