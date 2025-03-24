<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partners = new Partners($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$partners->partners_name = $data["partners_name"];
$partners->partners_page = checkIndex($data, "partners_page");
$partners->partners_img = $data["partners_img"];
$partners->partners_created = date("Y-m-d H:i:s");
$partners->partners_datetime = date("Y-m-d H:i:s");

$partners_img_old = $data["partners_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$partners->partners_img = checkToUploadGoogleDrive(
    $partners->partners_img, // FILES
    $partners_img_old, // OLD FILES
);

$query = checkCreate($partners);

returnSuccess($partners, "partners", $query);
