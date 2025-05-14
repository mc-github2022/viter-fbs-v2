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
  // get data
  $packages_category->packages_category_aid = $_GET['packages_categoryId'];
  checkId($packages_category->packages_category_aid);
  isAssociatedListCategory($packages_category);

  $query = checkDelete($packages_category);

  returnSuccess($packages_category, "packages_category", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
