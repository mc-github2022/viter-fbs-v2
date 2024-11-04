<?php

require "Response.php";
// use needed classes
$response = new Response();
$error = [];
$returnData = [];

if ($_FILES) {
    try {
        // loop and save file to public img
        for ($i = 0; $i < count($_FILES); $i++) {
            $file = $_FILES["file$i"]["name"];
            // move_uploaded_file($_FILES["file$i"]["tmp_name"], "../../../img/" . $file); // if online
            move_uploaded_file($_FILES["file$i"]["tmp_name"], "../../../public/img/" . strtolower($file)); // if localhost
        }
        $returnData["success"] = true;
        $returnData["message"] = "File success.";
        $response->setData($returnData);
        $response->send();
        exit;
    } catch (Exception $e) {
        $response->setSuccess(false);
        $error["success"] = false;
        $error['error'] = "File error.";
        $response->setData($error);
        $response->send();
        exit;
    }
} else {
    $response->setSuccess(false);
    $error["count"] = 0;
    $error["success"] = false;
    $error['error'] = "File empty`.";
    $response->setData($error);
    $response->send();
    exit;
}


// // Check if files were uploaded
// if (!empty($_FILES)) {
//     try {
//         // Initialize a success counter
//         $successfulUploads = 0;

//         // Loop through the uploaded files
//         foreach ($_FILES as $key => $file) {
//             // Check if the file is valid
//             if (isset($file['name']) && $file['error'] === UPLOAD_ERR_OK) {
//                 $fileName = strtolower($file['name']);
//                 // Define the target path
//                 $targetPath = "../../../public/img/" . $fileName;

//                 // Move the uploaded file to the target directory
//                 if (move_uploaded_file($file['tmp_name'], $targetPath)) {
//                     $successfulUploads++;
//                 } else {
//                     throw new Exception("Failed to move uploaded file.");
//                 }
//             } else {
//                 // Handle file upload error
//                 throw new Exception("Error with file upload: " . $file['error']);
//             }
//         }

//         // If files were successfully uploaded, set the success response
//         if ($successfulUploads > 0) {
//             $returnData["success"] = true;
//             $returnData["message"] = "$successfulUploads file(s) uploaded successfully.";
//             $response->setData($returnData);
//         } else {
//             throw new Exception("No files uploaded.");
//         }
//     } catch (Exception $e) {
//         $response->setSuccess(false);
//         $error["success"] = false;
//         $error['error'] = $e->getMessage(); // Use the exception message for debugging
//         $response->setData($error);
//     }
// } else {
//     $response->setSuccess(false);
//     $error["success"] = false;
//     $error['error'] = "No files were uploaded.";
//     $response->setData($error);
// }

// $response->send();
// exit;
