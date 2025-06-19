<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_portfolio = new WordpressPortfolio($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("wordpress_portfolioid", $_GET)) {
  // get data
  checkPayload($data);

  $wordpress_portfolio->wordpress_portfolio_aid = $_GET['wordpress_portfolioid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($wordpress_portfolio->wordpress_portfolio_aid);
  $query = checkDelete($wordpress_portfolio);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($wordpress_portfolio, "wordpress portfolio", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
