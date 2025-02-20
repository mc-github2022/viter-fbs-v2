<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$careers = new Careers($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$careers->careers_icon = $data["careers_icon"];
$careers->careers_job_title = $data["careers_job_title"];
$careers->careers_job_classification = $data["careers_job_classification"];
$careers->careers_job_mode = $data["careers_job_mode"];
$careers->careers_job_status = $data["careers_job_status"];
$careers->careers_job_description = $data["careers_job_description"];
$careers->careers_img = $data["careers_img"];
$careers->careers_job_overview = $data["careers_job_overview"];
$careers->careers_created = date("Y-m-d H:i:s");
$careers->careers_datetime = date("Y-m-d H:i:s");

$careers_img_old = $data["careers_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$careers->careers_img = checkToUploadGoogleDrive(
    $careers->careers_img, // FILES
    $careers_img_old, // OLD FILES
);

$query = checkCreate($careers);

returnSuccess($careers, "careers", $query);
