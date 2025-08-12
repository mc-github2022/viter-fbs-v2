<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new ContactFormSettings($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$val->form_name = $data["form_name"];
$val->form_title = $data["form_title"];
$val->form_subtitle = $data["form_subtitle"];
$val->form_address = $data["form_address"];
$val->form_accounting_no = $data["form_accounting_no"];
$val->form_company_no = $data["form_company_no"];
$val->form_web_no = $data["form_web_no"];
$val->form_services = $data["form_services"];
$val->form_facebook_link = $data["form_facebook_link"];
$val->form_linkedin_link = $data["form_linkedin_link"];
$val->form_youtube_link = $data["form_youtube_link"];
$val->form_instagram_link = $data["form_instagram_link"];
$val->form_tiktok_link = $data["form_tiktok_link"];
$val->form_is_upload_file = $data["form_is_upload_file"];
$val->form_is_upload_input = $data["form_is_upload_input"];
$val->form_default_email = $data["form_default_email"];
$val->form_web_role = $data["form_web_role"];
$val->form_web_name = $data["form_web_name"];
$val->form_web_email = $data["form_web_email"];
$val->form_computer_role = $data["form_computer_role"];
$val->form_computer_name = $data["form_computer_name"];
$val->form_computer_email = $data["form_computer_email"];
$val->form_accounting_role = $data["form_accounting_role"];
$val->form_accounting_name = $data["form_accounting_name"];
$val->form_accounting_email = $data["form_accounting_email"];
$val->form_hr_manager_role = $data["form_hr_manager_role"];
$val->form_hr_manager_name = $data["form_hr_manager_name"];
$val->form_hr_manager_email = $data["form_hr_manager_email"];
$val->form_hr_staff_role = $data["form_hr_staff_role"];
$val->form_hr_staff_name = $data["form_hr_staff_name"];
$val->form_hr_staff_email = $data["form_hr_staff_email"];

$val->form_fbs_brochure = $data["form_fbs_brochure"];
$val->form_ojt_proposal = $data["form_ojt_proposal"];
$val->form_work_immersion = $data["form_work_immersion"];
$val->form_website_design = $data["form_website_design"];
$val->form_graphic_design = $data["form_graphic_design"];
$val->form_img = $data["form_img"];
$val->form_created = date("Y-m-d H:i:s");
$val->form_updated = date("Y-m-d H:i:s");

$form_fbs_brochure_old = $data["form_fbs_brochure_old"];
$form_ojt_proposal_old = $data["form_ojt_proposal_old"];
$form_work_immersion_old = $data["form_work_immersion_old"];
$form_website_design_old = $data["form_website_design_old"];
$form_graphic_design_old = $data["form_graphic_design_old"];
$form_img_old = $data["form_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$val->form_fbs_brochure = checkToUploadGoogleDrive(
    $val->form_fbs_brochure, // FILES
    $form_fbs_brochure_old, // OLD FILES
);
// UPLOAD FILE TO GOOGLE DRIVE  
$val->form_ojt_proposal = checkToUploadGoogleDrive(
    $val->form_ojt_proposal, // FILES
    $form_ojt_proposal_old, // OLD FILES
);
// UPLOAD FILE TO GOOGLE DRIVE  
$val->form_work_immersion = checkToUploadGoogleDrive(
    $val->form_work_immersion, // FILES
    $form_work_immersion_old, // OLD FILES
);
// UPLOAD FILE TO GOOGLE DRIVE  
$val->form_website_design = checkToUploadGoogleDrive(
    $val->form_website_design, // FILES
    $form_website_design_old, // OLD FILES
);
// UPLOAD FILE TO GOOGLE DRIVE  
$val->form_graphic_design = checkToUploadGoogleDrive(
    $val->form_graphic_design, // FILES
    $form_graphic_design_old, // OLD FILES
);
// UPLOAD FILE TO GOOGLE DRIVE  
$val->form_img = checkToUploadGoogleDrive(
    $val->form_img, // FILES
    $form_img_old, // OLD FILES
);

$query = checkCreate($val);


returnSuccess($val, "contact form", $query);
