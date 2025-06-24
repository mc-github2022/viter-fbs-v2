<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_profile = new WorkCompanyProfile($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$workProfileUpdate = $data['workProfileUpdate'] ?? '';

// Set common fields
$work_profile->work_profile_created = date("Y-m-d H:i:s");
$work_profile->work_profile_datetime = date("Y-m-d H:i:s");


if ($workProfileUpdate == "workProfileUpdateImg") {
    $work_profile->work_profile_subtitle = $data["work_profile_subtitle"];
    $work_profile->work_profile_title = $data["work_profile_title"];
    $work_profile->work_profile_button_text = $data["work_profile_button_text"];
    $work_profile->work_profile_img = $data["work_profile_img"];
    $work_profile->work_profile_file = $data["work_profile_file"];

    $work_profile_file_old = $data["work_profile_file_old"];
    $work_profile_img_old = $data["work_profile_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_profile->work_profile_img = checkToUploadGoogleDrive(
        $work_profile->work_profile_img, // FILES
        $work_profile_img_old, // OLD FILES
    );

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_profile->work_profile_file = checkToUploadGoogleDrive(
        $work_profile->work_profile_file, // FILES
        $work_profile_file_old, // OLD FILES
    );

    $query = checkCreate($work_profile);
}
if ($workProfileUpdate == "workProfileListUpdate") {
    $work_profile->work_profile_list_title_bold_a = $data["work_profile_list_title_bold_a"];
    $work_profile->work_profile_list_title_a = $data["work_profile_list_title_a"];
    $work_profile->work_profile_list_description_a = $data["work_profile_list_description_a"];
    $work_profile->work_profile_list_title_bold_b = $data["work_profile_list_title_bold_b"];
    $work_profile->work_profile_list_title_b = $data["work_profile_list_title_b"];
    $work_profile->work_profile_list_description_b = $data["work_profile_list_description_b"];
    $work_profile->work_profile_list_title_bold_c = $data["work_profile_list_title_bold_c"];
    $work_profile->work_profile_list_title_c = $data["work_profile_list_title_c"];
    $work_profile->work_profile_list_description_c = $data["work_profile_list_description_c"];
    $work_profile->work_profile_list_title_bold_d = $data["work_profile_list_title_bold_d"];
    $work_profile->work_profile_list_title_d = $data["work_profile_list_title_d"];
    $work_profile->work_profile_list_description_d = $data["work_profile_list_description_d"];

    $query = checkCreateCompanyProfileList($work_profile);
}
if ($workProfileUpdate == "workProfileUpdateDesc") {
    $work_profile->work_profile_desc = $data["work_profile_desc"];

    $query = checkCreateCompanyDescription($work_profile);
}


// Return response
returnSuccess($work_profile, "work profile create", $query);
