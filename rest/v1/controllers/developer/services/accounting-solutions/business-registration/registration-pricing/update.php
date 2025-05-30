<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new RegistrationPackageTitle($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("registration_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateRegistrationTitle = $data['isUpdateRegistrationTitle'];


  if ($isUpdateRegistrationTitle == "packagesTitleUpdate") {
    $title->registration_title_aid = $_GET['registration_titlesid'];
    $title->registration_title_packages_subtitle = $data["registration_title_packages_subtitle"];
    $title->registration_title_packages_title = $data["registration_title_packages_title"];

    $title->registration_title_datetime = date("Y-m-d H:i:s");
    checkId($title->registration_title_aid);

    // update
    $query = checkUpdate($title);
  }

  returnSuccess($title, "registration titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
