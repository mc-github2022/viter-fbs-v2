<?php

function getHtmlSendMessage(
  $unsubscribe_link,
  $email,
  $key,
  $ROOT_DOMAIN,
) {


  $html = '
     <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body{
        font-family: "Arial";
      }
      p {
        font-size: 16px;
      }
    </style>
  </head>
  <body
    style="
      background-color: #f0f0f0;
      font-family: Poppins;
      line-height: 1.6;
      padding: 10px 0;
      background-color: #fff;
    "
  >
    <div style="width: 420px; margin: 0 auto; padding: 20px 0">
      <div style="margin-bottom: 20px; display: flex; justify-content: center">
        <img
          style="width: 120px; margin: 0 auto"
          src="https://frontlinebusiness.com.ph/img/logo.png"
          alt=""
        />
      </div>
      <div>
        <img
          style="width: 100%; margin-bottom: 50px"
          src="https://frontlinebusiness.com.ph/img/subscribe.png"
          alt=""
        />
        <p style="margin-bottom: 20px;  font-family: Poppins;">Hey there,</p>
        <p style="margin-bottom: 20px;  font-family: Poppins;">
          Thank you for subscribing to Frontline Business Solution newsletter.
        </p>
        <p style="margin-bottom: 20px;  font-family: Poppins;">
          Once or twice a month, you will receive a newsletter with information
          about our services updates, special offers, great deals , insights,
          and much more.
        </p>
        <p style="margin-bottom: 20px;  font-family: Poppins;">We are happy to have you on board!</p>
        <p style="font-family: Poppins;">
          All the best, <br />
          <i>Frontline Business Solutions</i>
        </p>
      </div>
      <div
        class="socialLinks"
        style="
          text-align: center;
          padding: 30px 0;
          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
          margin-bottom: 30px;
          margin-top: 30px;
        "
      >
        <div style="margin-bottom: 0; text-align: center">
          <a
            href="https://www.facebook.com/frontline.business"
            style="display: inline-block"
            ><img
              style="width: 25px; height: 25px"
              src="https://frontlinebusiness.com.ph/wp-content/uploads/2023/09/facebook-png.png"
              alt=""
          /></a>
          <a
            href="https://www.tiktok.com/@frontlinebusinessinc"
            style="display: inline-block"
            ><img
              style="width: 25px; height: 25px"
              src="https://frontlinebusiness.com.ph/wp-content/uploads/2023/09/tiktok-png.png"
              alt=""
          /></a>
          <a
            href="https://www.instagram.com/frontline.business/"
            style="display: inline-block"
            ><img
              style="width: 25px; height: 25px"
              src="https://frontlinebusiness.com.ph/wp-content/uploads/2023/09/insta-png.png"
              alt=""
          /></a>
          <a
            href="https://www.linkedin.com/company/frontline-business-solutions-inc/"
            style="display: inline-block"
            ><img
              style="width: 25px; height: 25px"
              src="https://frontlinebusiness.com.ph/wp-content/uploads/2023/09/linked-png.png"
              alt=""
          /></a>
        </div>
      </div>
      <div style="text-align: center; line-height: 1">
        <p style="font-family: Poppins;">
          <small>
            Frontline Business Solutions Inc. <br />
            Baloc Road, Brgy. San Ignacio <br />
            San Pablo City Laguna 4000 Philippines <br />
            <a href="https://frontlinebusiness.com.ph/"
              >frontlinebusiness.com.ph</a
            >
          </small>
          <div>
            <a style="font-size: 11.66px; font-family: Poppins;" href="' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $key . '">Unsubscribe</a>
          </div>
          <p style="font-size: 12px; padding: 0 10px">
            Having issues with the link? Try to paste this text on your browser
            URL:
            <a
              target="_blank"
              rel="nofollow"
              style="
                font-size: 12px;
                font-family: Helvetica Neue, sans-serif;
                text-decoration: none;
                color: #505050;
              "
              >' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $key . '</a
      >
          </p>
        </p>
      </div>
    </div>
  </body>
';
  return $html;
}
