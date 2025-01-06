<?php

function getHtmlSendMessage(
  $unsubscribe_link,
  $newsletter,
  $newsletterSubject,
  $emailReceiver,
  $key,
  $ROOT_DOMAIN,
) {


  $html = '
    
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
    <div>' . $newsletter . '</div>
          <div
            class="footer"
            style="
              padding: 32px 0;
              margin-bottom: 0;
              text-align: center;
              background-color: #fff;
            "
          >
            <div class="icons" style="margin-bottom: 8px">
              <a
                href="https://www.facebook.com/frontline.business"
                style="display: inline-block"
                ><img
                  style="width: 25px; height: 25px"
                  src="https://frontlinebusiness.com.ph/wp-content/uploads/2023/09/facebook-png.png"
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
              <a
                href="https://www.youtube.com/@frontlinebusinesssolutions6578"
                style="display: inline-block"
                ><img
                  style="width: 25px; height: 25px"
                  src="https://lh3.googleusercontent.com/pw/AP1GczOxgRuLJ7xLgCA-Q7wgcWhKlg_EhaVuNsWf5BW7IHbNjRFhoMW2VkrZCnyKRRkDE0pJLeNpCtGtf45fFEcLGU7xAbDDX6jotR9CGRlSkruukUWxQh7DeVHRaoMC_WUZOPKAia8HxI1lY5zmKGWfN22C=w70-h70-s-no-gm?authuser=0"
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
                href="https://www.tiktok.com/@frontlinebusinessinc"
                style="display: inline-block"
                ><img
                  style="width: 25px; height: 25px"
                  src="https://frontlinebusiness.com.ph/wp-content/uploads/2023/09/tiktok-png.png"
                  alt=""
              /></a>
            </div>

            <div style="text-align: center; line-height: 1">
              <p style="font-size: 16px">
                <small>
                  Copyright 2025, All rights reserved. <br />
                  Baloc Road, Brgy, San Ignacio, San Pablo City, Laguna
                  Philippines 4000<br />
                  <br />
                  You are receiving this email because you opted in at our
                  website. <br />
                  <br />

                  <a href="' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $key . '" style="color: #333; text-decoration: underline"
                    >Unsubscribe</a
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
    </div>
  </body>
';
  return $html;
}
