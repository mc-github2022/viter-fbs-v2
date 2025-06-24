<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_teams = new WorkTeams($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateWorkTeams = $data['isUpdateWorkTeams'] ?? '';

// Set common fields
$work_teams->work_teams_created = date("Y-m-d H:i:s");
$work_teams->work_teams_datetime = date("Y-m-d H:i:s");


if ($isUpdateWorkTeams == "workTeamsCeoUpdate") {
    $work_teams->work_teams_ceo_img = $data["work_teams_ceo_img"];
    $work_teams->work_teams_ceo_name = $data["work_teams_ceo_name"];
    $work_teams->work_teams_ceo_position = $data["work_teams_ceo_position"];

    $work_teams_ceo_img_old = $data["work_teams_ceo_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_ceo_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_ceo_img, // FILES
        $work_teams_ceo_img_old, // OLD FILES
    );

    $query = checkCreate($work_teams);
}
if ($isUpdateWorkTeams == "workTeamsOmUpdate") {
    $work_teams->work_teams_om_img = $data["work_teams_om_img"];
    $work_teams->work_teams_om_name = $data["work_teams_om_name"];
    $work_teams->work_teams_om_position = $data["work_teams_om_position"];

    $work_teams_om_img_old = $data["work_teams_om_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_om_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_om_img, // FILES
        $work_teams_om_img_old, // OLD FILES
    );

    $query = checkCreateOperationManager($work_teams);
}
if ($isUpdateWorkTeams == "workTeamsHrUpdate") {
    $work_teams->work_teams_hr_img = $data["work_teams_hr_img"];
    $work_teams->work_teams_hr_name = $data["work_teams_hr_name"];
    $work_teams->work_teams_hr_position = $data["work_teams_hr_position"];

    $work_teams_hr_img_old = $data["work_teams_hr_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_hr_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_hr_img, // FILES
        $work_teams_hr_img_old, // OLD FILES
    );

    $query = checkCreateHR($work_teams);
}
if ($isUpdateWorkTeams == "workTeamsFinanceUpdate") {
    $work_teams->work_teams_finance_img = $data["work_teams_finance_img"];
    $work_teams->work_teams_finance_name = $data["work_teams_finance_name"];
    $work_teams->work_teams_finance_position = $data["work_teams_finance_position"];

    $work_teams_finance_img_old = $data["work_teams_finance_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_finance_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_finance_img, // FILES
        $work_teams_finance_img_old, // OLD FILES
    );

    $query = checkCreateFinance($work_teams);
}
if ($isUpdateWorkTeams == "workTeamsLcsUpdate") {
    $work_teams->work_teams_lcs_img = $data["work_teams_lcs_img"];
    $work_teams->work_teams_lcs_name = $data["work_teams_lcs_name"];
    $work_teams->work_teams_lcs_position = $data["work_teams_lcs_position"];

    $work_teams_lcs_img_old = $data["work_teams_lcs_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_lcs_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_lcs_img, // FILES
        $work_teams_lcs_img_old, // OLD FILES
    );

    $query = checkCreateLcsSupervisor($work_teams);
}
if ($isUpdateWorkTeams == "workTeamsWebUpdate") {
    $work_teams->work_teams_web_img = $data["work_teams_web_img"];
    $work_teams->work_teams_web_name = $data["work_teams_web_name"];
    $work_teams->work_teams_web_position = $data["work_teams_web_position"];

    $work_teams_web_img_old = $data["work_teams_web_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_web_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_web_img, // FILES
        $work_teams_web_img_old, // OLD FILES
    );

    $query = checkCreateWebSupervisor($work_teams);
}
if ($isUpdateWorkTeams == "workTeamsMarketingUpdate") {
    $work_teams->work_teams_marketing_img = $data["work_teams_marketing_img"];
    $work_teams->work_teams_marketing_name = $data["work_teams_marketing_name"];
    $work_teams->work_teams_marketing_position = $data["work_teams_marketing_position"];

    $work_teams_marketing_img_old = $data["work_teams_marketing_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_marketing_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_marketing_img, // FILES
        $work_teams_marketing_img_old, // OLD FILES
    );

    $query = checkCreateMarketing($work_teams);
}
if ($isUpdateWorkTeams == "workTeamsVaUpdate") {
    $work_teams->work_teams_va_img = $data["work_teams_va_img"];
    $work_teams->work_teams_va_name = $data["work_teams_va_name"];
    $work_teams->work_teams_va_position = $data["work_teams_va_position"];

    $work_teams_va_img_old = $data["work_teams_va_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_teams->work_teams_va_img = checkToUploadGoogleDrive(
        $work_teams->work_teams_va_img, // FILES
        $work_teams_va_img_old, // OLD FILES
    );

    $query = checkCreateVA($work_teams);
}


// Return response
returnSuccess($work_teams, "work teams create", $query);
