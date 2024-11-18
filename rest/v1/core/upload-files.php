<?php

require "Response.php";
// use needed classes
$response = new Response();
$error = [];
$returnData = [];

if ($_FILES['file']) {
    $files = $_FILES["file"]["name"];
    // if (move_uploaded_file($_FILES["file"]["tmp_name"], "../../../img/" . $files)) { // if online
    if (move_uploaded_file($_FILES["file"]["tmp_name"], "../../../public/files/" . $files)) { // if localhost
        $returnData["success"] = true;
        $returnData["message"] = "file success.";
        $response->setData($returnData);
        $response->send();
        exit;
    } else {
        $response->setSuccess(false);
        $error["success"] = false;
        $error['error'] = "file error.";
        $response->setData($error);
        $response->send();
        exit;
    }
} else {
    $response->setSuccess(false);
    $error["count"] = 0;
    $error["success"] = false;
    $error['error'] = "No file.";
    $response->setData($error);
    $response->send();
    exit;
}
