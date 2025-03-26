<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$gallery = new Gallery($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$gallery->gallery_img = $data["gallery_img"];
$gallery->gallery_created = date("Y-m-d H:i:s");
$gallery->gallery_datetime = date("Y-m-d H:i:s");

$gallery_img_old = $data["gallery_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$gallery->gallery_img = checkToUploadGoogleDrive(
    $gallery->gallery_img, // FILES
    $gallery_img_old, // OLD FILES
);

$query = checkCreate($gallery);

returnSuccess($gallery, "gallery", $query);
