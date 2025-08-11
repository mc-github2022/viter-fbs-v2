<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes 
require '../../../models/developer/contact-form-settings/ContactFormSettings.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new ContactFormSettings($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data 

    if (empty($_GET)) {

        $query = checkReadAllContactForm($val);
        http_response_code(200);
        getQueriedData($query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
