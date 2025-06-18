<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_wordpress = new ContactFormWordpress($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContactFormWordpress = $data['isUpdateContactFormWordpress'] ?? '';

if ($isUpdateContactFormWordpress == "contactFormWordpressUpdate") {

    $form_wordpress->form_wordpress_file = $data["form_wordpress_file"];
    $form_wordpress->form_wordpress_created = date("Y-m-d H:i:s");
    $form_wordpress->form_wordpress_datetime = date("Y-m-d H:i:s");

    $form_wordpress_file_old = $data["form_wordpress_file_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $form_wordpress->form_wordpress_file = checkToUploadGoogleDrive(
        $form_wordpress->form_wordpress_file, // FILES
        $form_wordpress_file_old, // OLD FILES
    );

    $query = checkCreate($form_wordpress);
}
returnSuccess($form_wordpress, "contact form wordpress create", $query);
