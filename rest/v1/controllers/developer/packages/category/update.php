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
  // check data
  checkPayload($data);
  // get data
  $packages_category->packages_category_aid = $_GET['packages_categoryId'];
  $packages_category->packages_category_name = checkIndex($data, "packages_category_name");
  $packages_category->packages_category_list_name = $data["packages_category_list_name"];
  $packages_category->packages_category_url = $data["packages_category_url"];
  $packages_category->packages_category_datetime = date("Y-m-d H:i:s");
  checkId($packages_category->packages_category_aid);


  //checks current data to avoid same entries from being updated
  $packages_category_name_old = checkIndex($data, 'packages_category_name_old');
  compareName($packages_category, $packages_category_name_old, $packages_category->packages_category_name);

  // update
  $query = checkUpdate($packages_category);
  returnSuccess($packages_category, "packages_category", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
