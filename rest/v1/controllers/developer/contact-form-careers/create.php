<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_careers = new ContactFormCareers($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContactFormCareers = $data['isUpdateContactFormCareers'] ?? '';

if ($isUpdateContactFormCareers == "contactFormCareersUpdate") {

    $form_careers->form_careers_subtitle = $data["form_careers_subtitle"];
    $form_careers->form_careers_title = $data["form_careers_title"];
    $form_careers->form_careers_telephone = $data["form_careers_telephone"];
    $form_careers->form_careers_phone = $data["form_careers_phone"];
    $form_careers->form_careers_position_a = $data["form_careers_position_a"];
    $form_careers->form_careers_name_a = $data["form_careers_name_a"];
    $form_careers->form_careers_email_a = $data["form_careers_email_a"];
    $form_careers->form_careers_position_b = $data["form_careers_position_b"];
    $form_careers->form_careers_name_b = $data["form_careers_name_b"];
    $form_careers->form_careers_email_b = $data["form_careers_email_b"];
    $form_careers->form_careers_created = date("Y-m-d H:i:s");
    $form_careers->form_careers_datetime = date("Y-m-d H:i:s");

    $query = checkCreate($form_careers);
}
returnSuccess($form_careers, "contact form lcss create", $query);
