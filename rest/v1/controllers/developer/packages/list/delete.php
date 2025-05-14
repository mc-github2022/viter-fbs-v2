<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_list = new PackagesList($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("packages_listId", $_GET)) {
  // get data
  $packages_list->packages_list_aid = $_GET['packages_listId'];
  checkId($packages_list->packages_list_aid);
  // isAssociatedSubscriberpackages_listName($packages_list);

  $query = checkDelete($packages_list);

  returnSuccess($packages_list, "packages_list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
