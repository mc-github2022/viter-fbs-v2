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

$wordpressPortfolioUpdate = $data['wordpressPortfolioUpdate'] ?? '';

// Set common fields
$wordpress_portfolio->wordpress_portfolio_created = date("Y-m-d H:i:s");
$wordpress_portfolio->wordpress_portfolio_datetime = date("Y-m-d H:i:s");


if ($wordpressPortfolioUpdate == "portfolioTitleUpdate") {
    $wordpress_portfolio->wordpress_portfolio_subtitle = $data["wordpress_portfolio_subtitle"];
    $wordpress_portfolio->wordpress_portfolio_title = $data["wordpress_portfolio_title"];

    $query = checkCreate($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListAUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_a = $data["wordpress_portfolio_url_a"];
    $wordpress_portfolio->wordpress_portfolio_website_a = $data["wordpress_portfolio_website_a"];
    $wordpress_portfolio->wordpress_portfolio_img_a = $data["wordpress_portfolio_img_a"];

    $wordpress_portfolio_img_a_old = $data["wordpress_portfolio_img_a_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_a = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_a, // FILES
        $wordpress_portfolio_img_a_old, // OLD FILES
    );

    $query = checkCreatePortfolioA($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListBUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_b = $data["wordpress_portfolio_url_b"];
    $wordpress_portfolio->wordpress_portfolio_website_b = $data["wordpress_portfolio_website_b"];
    $wordpress_portfolio->wordpress_portfolio_img_b = $data["wordpress_portfolio_img_b"];

    $wordpress_portfolio_img_b_old = $data["wordpress_portfolio_img_b_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_b = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_b, // FILES
        $wordpress_portfolio_img_b_old, // OLD FILES
    );

    $query = checkCreatePortfolioB($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListCUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_c = $data["wordpress_portfolio_url_c"];
    $wordpress_portfolio->wordpress_portfolio_website_c = $data["wordpress_portfolio_website_c"];
    $wordpress_portfolio->wordpress_portfolio_img_c = $data["wordpress_portfolio_img_c"];

    $wordpress_portfolio_img_c_old = $data["wordpress_portfolio_img_c_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_c = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_c, // FILES
        $wordpress_portfolio_img_c_old, // OLD FILES
    );

    $query = checkCreatePortfolioC($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListDUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_d = $data["wordpress_portfolio_url_d"];
    $wordpress_portfolio->wordpress_portfolio_website_d = $data["wordpress_portfolio_website_d"];
    $wordpress_portfolio->wordpress_portfolio_img_d = $data["wordpress_portfolio_img_d"];

    $wordpress_portfolio_img_d_old = $data["wordpress_portfolio_img_d_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_d = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_d, // FILES
        $wordpress_portfolio_img_d_old, // OLD FILES
    );

    $query = checkCreatePortfolioD($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListEUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_e = $data["wordpress_portfolio_url_e"];
    $wordpress_portfolio->wordpress_portfolio_website_e = $data["wordpress_portfolio_website_e"];
    $wordpress_portfolio->wordpress_portfolio_img_e = $data["wordpress_portfolio_img_e"];

    $wordpress_portfolio_img_e_old = $data["wordpress_portfolio_img_e_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_e = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_e, // FILES
        $wordpress_portfolio_img_e_old, // OLD FILES
    );

    $query = checkCreatePortfolioE($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListFUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_f = $data["wordpress_portfolio_url_f"];
    $wordpress_portfolio->wordpress_portfolio_website_f = $data["wordpress_portfolio_website_f"];
    $wordpress_portfolio->wordpress_portfolio_img_f = $data["wordpress_portfolio_img_f"];

    $wordpress_portfolio_img_f_old = $data["wordpress_portfolio_img_f_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_f = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_f, // FILES
        $wordpress_portfolio_img_f_old, // OLD FILES
    );

    $query = checkCreatePortfolioF($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListGUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_g = $data["wordpress_portfolio_url_g"];
    $wordpress_portfolio->wordpress_portfolio_website_g = $data["wordpress_portfolio_website_g"];
    $wordpress_portfolio->wordpress_portfolio_img_g = $data["wordpress_portfolio_img_g"];

    $wordpress_portfolio_img_g_old = $data["wordpress_portfolio_img_g_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_g = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_g, // FILES
        $wordpress_portfolio_img_g_old, // OLD FILES
    );

    $query = checkCreatePortfolioG($wordpress_portfolio);
}
if ($wordpressPortfolioUpdate == "portfolioListHUpdate") {
    $wordpress_portfolio->wordpress_portfolio_url_h = $data["wordpress_portfolio_url_h"];
    $wordpress_portfolio->wordpress_portfolio_website_h = $data["wordpress_portfolio_website_h"];
    $wordpress_portfolio->wordpress_portfolio_img_h = $data["wordpress_portfolio_img_h"];

    $wordpress_portfolio_img_h_old = $data["wordpress_portfolio_img_h_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_portfolio->wordpress_portfolio_img_h = checkToUploadGoogleDrive(
        $wordpress_portfolio->wordpress_portfolio_img_h, // FILES
        $wordpress_portfolio_img_h_old, // OLD FILES
    );

    $query = checkCreatePortfolioH($wordpress_portfolio);
}


// Return response
returnSuccess($wordpress_portfolio, "wordpress portfolio create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
