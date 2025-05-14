<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_category = new PackagesCategory($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("packages_categoryId", $_GET)) {
  $packages_category->packages_category_aid = $_GET['packages_categoryId'];
  checkId($packages_category->packages_category_aid);
  $query = checkReadAll($packages_category);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($packages_category);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
