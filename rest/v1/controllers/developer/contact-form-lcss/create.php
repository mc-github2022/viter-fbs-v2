<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_lcss = new ContactFormLcss($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContactFormLcss = $data['isUpdateContactFormLcss'] ?? '';

if ($isUpdateContactFormLcss == "contactFormLcssUpdate") {

    $form_lcss->form_lcss_subtitle = $data["form_lcss_subtitle"];
    $form_lcss->form_lcss_title = $data["form_lcss_title"];
    $form_lcss->form_lcss_telephone = $data["form_lcss_telephone"];
    $form_lcss->form_lcss_phone = $data["form_lcss_phone"];
    $form_lcss->form_lcss_file = $data["form_lcss_file"];
    $form_lcss->form_lcss_computer_title = $data["form_lcss_computer_title"];
    $form_lcss->form_lcss_computer_name = $data["form_lcss_computer_name"];
    $form_lcss->form_lcss_computer_email = $data["form_lcss_computer_email"];
    $form_lcss->form_lcss_accounting_title = $data["form_lcss_accounting_title"];
    $form_lcss->form_lcss_accounting_name = $data["form_lcss_accounting_name"];
    $form_lcss->form_lcss_accounting_email = $data["form_lcss_accounting_email"];
    $form_lcss->form_lcss_created = date("Y-m-d H:i:s");
    $form_lcss->form_lcss_datetime = date("Y-m-d H:i:s");

    $form_lcss_file_old = $data["form_lcss_file_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $form_lcss->form_lcss_file = checkToUploadGoogleDrive(
        $form_lcss->form_lcss_file, // FILES
        $form_lcss_file_old, // OLD FILES
    );

    $query = checkCreate($form_lcss);
}
returnSuccess($form_lcss, "contact form lcss create", $query);
