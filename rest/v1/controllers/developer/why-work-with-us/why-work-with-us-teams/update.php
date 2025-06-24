<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_teams = new WorkTeams($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("work_teamsid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateWorkTeams = $data['isUpdateWorkTeams'];

  if ($isUpdateWorkTeams == "workTeamsCeoUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_ceo_img = $data["work_teams_ceo_img"];
    $work_teams->work_teams_ceo_name = $data["work_teams_ceo_name"];
    $work_teams->work_teams_ceo_position = $data["work_teams_ceo_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    checkId($work_teams->work_teams_aid);

    $work_teams_ceo_img_old = $data["work_teams_ceo_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_ceo_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_ceo_img, // FILES
      $work_teams_ceo_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_ceo_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_ceo_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($work_teams);
  }
  if ($isUpdateWorkTeams == "workTeamsOmUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_om_img = $data["work_teams_om_img"];
    $work_teams->work_teams_om_name = $data["work_teams_om_name"];
    $work_teams->work_teams_om_position = $data["work_teams_om_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    checkId($work_teams->work_teams_aid);

    $work_teams_om_img_old = $data["work_teams_om_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_om_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_om_img, // FILES
      $work_teams_om_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_om_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_om_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateOperationManager($work_teams);
  }
  if ($isUpdateWorkTeams == "workTeamsHrUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_hr_img = $data["work_teams_hr_img"];
    $work_teams->work_teams_hr_name = $data["work_teams_hr_name"];
    $work_teams->work_teams_hr_position = $data["work_teams_hr_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    checkId($work_teams->work_teams_aid);

    $work_teams_hr_img_old = $data["work_teams_hr_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_hr_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_hr_img, // FILES
      $work_teams_hr_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_hr_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_hr_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateHR($work_teams);
  }
  if ($isUpdateWorkTeams == "workTeamsFinanceUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_finance_img = $data["work_teams_finance_img"];
    $work_teams->work_teams_finance_name = $data["work_teams_finance_name"];
    $work_teams->work_teams_finance_position = $data["work_teams_finance_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    $work_teams_finance_img_old = $data["work_teams_finance_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_finance_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_finance_img, // FILES
      $work_teams_finance_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_finance_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_finance_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    checkId($work_teams->work_teams_aid);

    // update
    $query = checkUpdateFinance($work_teams);
  }
  if ($isUpdateWorkTeams == "workTeamsLcsUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_lcs_img = $data["work_teams_lcs_img"];
    $work_teams->work_teams_lcs_name = $data["work_teams_lcs_name"];
    $work_teams->work_teams_lcs_position = $data["work_teams_lcs_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    checkId($work_teams->work_teams_aid);

    $work_teams_lcs_img_old = $data["work_teams_lcs_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_lcs_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_lcs_img, // FILES
      $work_teams_lcs_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_lcs_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_lcs_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateLcsSupervisor($work_teams);
  }
  if ($isUpdateWorkTeams == "workTeamsWebUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_web_img = $data["work_teams_web_img"];
    $work_teams->work_teams_web_name = $data["work_teams_web_name"];
    $work_teams->work_teams_web_position = $data["work_teams_web_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    checkId($work_teams->work_teams_aid);

    $work_teams_web_img_old = $data["work_teams_web_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_web_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_web_img, // FILES
      $work_teams_web_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_web_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_web_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateWebSupervisor($work_teams);
  }
  if ($isUpdateWorkTeams == "workTeamsMarketingUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_marketing_img = $data["work_teams_marketing_img"];
    $work_teams->work_teams_marketing_name = $data["work_teams_marketing_name"];
    $work_teams->work_teams_marketing_position = $data["work_teams_marketing_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    checkId($work_teams->work_teams_aid);

    $work_teams_marketing_img_old = $data["work_teams_marketing_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_marketing_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_marketing_img, // FILES
      $work_teams_marketing_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_marketing_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_marketing_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateMarketing($work_teams);
  }
  if ($isUpdateWorkTeams == "workTeamsVaUpdate") {

    $work_teams->work_teams_aid = $_GET['work_teamsid'];
    $work_teams->work_teams_va_img = $data["work_teams_va_img"];
    $work_teams->work_teams_va_name = $data["work_teams_va_name"];
    $work_teams->work_teams_va_position = $data["work_teams_va_position"];
    $work_teams->work_teams_datetime = date("Y-m-d H:i:s");

    checkId($work_teams->work_teams_aid);

    $work_teams_va_img_old = $data["work_teams_va_img_old"];
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_teams->work_teams_va_img = checkToUploadGoogleDrive(
      $work_teams->work_teams_va_img, // FILES
      $work_teams_va_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_teams->work_teams_va_img = checkDeleteGoogleDriveApiFiles(
      $work_teams->work_teams_va_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateVA($work_teams);
  }


  returnSuccess($work_teams, "work teams update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
