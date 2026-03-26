<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_portfolio = new WordpressPortfolio($conn);
// get should not be present

// check data
checkPayload($data);
// get data


// Set common fields
$wordpress_portfolio->wordpress_portfolio_created = date("Y-m-d H:i:s");
$wordpress_portfolio->wordpress_portfolio_datetime = date("Y-m-d H:i:s");


$wordpress_portfolio->wordpress_portfolio_url = $data["wordpress_portfolio_url"];
$wordpress_portfolio->wordpress_portfolio_website = $data["wordpress_portfolio_website"];
$wordpress_portfolio->wordpress_portfolio_img = $data["wordpress_portfolio_img"];

$wordpress_portfolio_img_old = $data["wordpress_portfolio_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$wordpress_portfolio->wordpress_portfolio_img = checkToUploadGoogleDrive(
    $wordpress_portfolio->wordpress_portfolio_img, // FILES
    $wordpress_portfolio_img_old, // OLD FILES
);

$query = checkCreate($wordpress_portfolio);


// Return response
returnSuccess($wordpress_portfolio, "wordpress portfolio create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
