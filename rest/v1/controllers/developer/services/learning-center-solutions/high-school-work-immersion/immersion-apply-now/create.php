<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_apply = new ImmersionApplyNow($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateImmersionApplyNow = $data['isUpdateImmersionApplyNow'] ?? '';

if ($isUpdateImmersionApplyNow == "immersionApplyNowUpdate") {

    $immersion_apply->immersion_apply_subtitle = $data["immersion_apply_subtitle"];
    $immersion_apply->immersion_apply_title = $data["immersion_apply_title"];
    $immersion_apply->immersion_apply_requirement_list = $data["immersion_apply_requirement_list"];
    $immersion_apply->immersion_apply_button_text = $data["immersion_apply_button_text"];
    $immersion_apply->immersion_apply_img = $data["immersion_apply_img"];
    $immersion_apply->immersion_apply_created = date("Y-m-d H:i:s");
    $immersion_apply->immersion_apply_datetime = date("Y-m-d H:i:s");


    $immersion_apply_img_old = $data["immersion_apply_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $immersion_apply->immersion_apply_img = checkToUploadGoogleDrive(
        $immersion_apply->immersion_apply_img, // FILES
        $immersion_apply_img_old, // OLD FILES
    );

    $query = checkCreate($immersion_apply);
}

returnSuccess($immersion_apply, "create immersion apply now", $query);
