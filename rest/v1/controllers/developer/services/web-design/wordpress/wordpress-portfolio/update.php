<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_portfolio = new WordpressPortfolio($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("wordpress_portfolioid", $_GET)) {
  // check data
  checkPayload($data);
  // get data


  $wordpress_portfolio->wordpress_portfolio_aid = $_GET['wordpress_portfolioid'];
  $wordpress_portfolio->wordpress_portfolio_url = $data["wordpress_portfolio_url"];
  $wordpress_portfolio->wordpress_portfolio_website = $data["wordpress_portfolio_website"];
  $wordpress_portfolio->wordpress_portfolio_img = $data["wordpress_portfolio_img"];

  $wordpress_portfolio->wordpress_portfolio_datetime = date("Y-m-d H:i:s");
  checkId($wordpress_portfolio->wordpress_portfolio_aid);

  $wordpress_portfolio_img_old = $data["wordpress_portfolio_img_old"];
  $pendingDeleteFile = $data['pendingDeleteFile'];
  // UPLOAD FILE TO GOOGLDE DRIVE  
  $wordpress_portfolio->wordpress_portfolio_img = checkToUploadGoogleDrive(
    $wordpress_portfolio->wordpress_portfolio_img, // FILES
    $wordpress_portfolio_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $wordpress_portfolio->wordpress_portfolio_img = checkDeleteGoogleDriveApiFiles(
    $wordpress_portfolio->wordpress_portfolio_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($wordpress_portfolio);



  returnSuccess($wordpress_portfolio, "wordpress portfolio update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
