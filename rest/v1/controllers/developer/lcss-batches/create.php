<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lcss_batch = new LcssBatches($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$lcss_batch->lcss_batch_name = $data["lcss_batch_name"];
$lcss_batch->lcss_batch_category = checkIndex($data, "lcss_batch_category");
$lcss_batch->lcss_batch_school = $data["lcss_batch_school"];
$lcss_batch->lcss_batch_course = $data["lcss_batch_course"];
$lcss_batch->lcss_batch_img = $data["lcss_batch_img"];
$lcss_batch->lcss_batch_created = date("Y-m-d H:i:s");
$lcss_batch->lcss_batch_datetime = date("Y-m-d H:i:s");

$lcss_batch_img_old = $data["lcss_batch_img_old"];

//checks newly added data if it already exists
isNameExist($lcss_batch, $lcss_batch->lcss_batch_name);

// UPLOAD FILE TO GOOGLE DRIVE  
$lcss_batch->lcss_batch_img = checkToUploadGoogleDrive(
    $lcss_batch->lcss_batch_img, // FILES
    $lcss_batch_img_old, // OLD FILES
);

$query = checkCreate($lcss_batch);

returnSuccess($lcss_batch, "lcssBatch", $query);
