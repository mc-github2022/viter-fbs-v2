<?php

require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/users/developer/UserDeveloper.php';
// use JWT
require '../../../../jwt/vendor/autoload.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserDeveloper($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    $user_system->user_developer_email = $data['user_developer_email'];
    $password = $data['password'];

    $key = "jwt_admin_ko_ito";

    $result = checkLogin($user_system);

    $row = $result->fetch(PDO::FETCH_ASSOC);
    extract($row);

    loginAccess($password, $user_developer_password, $user_developer_email, $row, $result, $key);
}

http_response_code(200);
