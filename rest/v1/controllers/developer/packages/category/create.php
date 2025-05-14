<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_category = new PackagesCategory($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$packages_category->packages_category_is_active = 1;
$packages_category->packages_category_name = checkIndex($data, "packages_category_name");
$packages_category->packages_category_list_name = $data["packages_category_list_name"];
$packages_category->packages_category_url = $data["packages_category_url"];
$packages_category->packages_category_created = date("Y-m-d H:i:s");
$packages_category->packages_category_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
isNameExist($packages_category, $packages_category->packages_category_name);

$query = checkCreate($packages_category);

returnSuccess($packages_category, "packages_category", $query);
