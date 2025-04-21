<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_default = new ContactFormDefault($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContactFormDefault = $data['isUpdateContactFormDefault'] ?? '';

if ($isUpdateContactFormDefault == "contactFormDefaultUpdate") {

    $form_default->form_default_subtitle = $data["form_default_subtitle"];
    $form_default->form_default_title = $data["form_default_title"];
    $form_default->form_default_address = $data["form_default_address"];
    $form_default->form_default_telephone = $data["form_default_telephone"];
    $form_default->form_default_phone = $data["form_default_phone"];
    $form_default->form_default_email = $data["form_default_email"];
    $form_default->form_default_img = $data["form_default_img"];
    $form_default->form_default_file = $data["form_default_file"];
    $form_default->form_default_facebook_link = $data["form_default_facebook_link"];
    $form_default->form_default_linkedin_link = $data["form_default_linkedin_link"];
    $form_default->form_default_youtube_link = $data["form_default_youtube_link"];
    $form_default->form_default_instagram_link = $data["form_default_instagram_link"];
    $form_default->form_default_tiktok_link = $data["form_default_tiktok_link"];
    $form_default->form_default_created = date("Y-m-d H:i:s");
    $form_default->form_default_datetime = date("Y-m-d H:i:s");


    $form_default_img_old = $data["form_default_img_old"];
    $form_default_file_old = $data["form_default_file_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $form_default->form_default_img = checkToUploadGoogleDrive(
        $form_default->form_default_img, // FILES
        $form_default_img_old, // OLD FILES
    );

    // UPLOAD FILE TO GOOGLE DRIVE  
    $form_default->form_default_file = checkToUploadGoogleDrive(
        $form_default->form_default_file, // FILES
        $form_default_file_old, // OLD FILES
    );

    $query = checkCreate($form_default);
}

returnSuccess($form_default, "contact form default create", $query);
