<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$gallery = new Gallery($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("galleryid", $_GET)) {
  $gallery->gallery_aid = $_GET['galleryid'];
  checkId($gallery->gallery_aid);
  $query = checkReadAll($gallery);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($gallery);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
