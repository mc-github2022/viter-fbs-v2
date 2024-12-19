<?php

function getHtmlSendMessage(
  $email,
  $emailReceiver,
  $emailDate,
  $subscriberCount
) {


  $html = '
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: "Poppins", sans-serif !important;
    }

    /* .md-w80 {
      width: 80% !important;
      text-align: center !important;
    } */
    .font-medium {
      font-weight: 500;
    }

    @media screen and (max-width: 650px) {
      .canvas {
        width: 100% !important;
      }
      img {
        width: 100%;
      }
      .container {
        width: 100% !important;
        padding: 0 !important;
      }
      table td {
        display: block;
      }
    }
  </style>
  <body>
    <div class="bgHolder" style="padding: 10px 0; background-color: #ebf0f4">
      <section style="width: 680px; margin: 0 auto" class="container">
        <section class="canvas" style="padding: 20px;">
          <div
            class="theImage"
            style="margin-bottom: 20px; text-align: center;">
            <a href="#">
              <img style="width: 150px""
              src="https://frontlinebusiness.com.ph/img/logo.png" alt="FBS
              Holiday Greetings" />
            </a>
          </div>
          <div
            style="background-color: white; padding: 20px; text-align: center">
            <p style="font-weight: 600; font-size: 20px; margin-bottom: 10px">
              New Website Subscriber <br />
            </p>
            <p style="font-size: 16px; margin-bottom: 20px">
              You have a <b style="color: #6a1141">new subscriber</b> for your
              website monthly newsletter
            </p>

            <table
              style="
                border-spacing: 10px;
                margin: 0 auto;
                text-align: left;
                border: 1px solid rgb(230, 230, 230);
                margin-bottom: 30px;
              ">
              <tr>
                <td style="color: gray">Email:</td>
                <td style="color: blue">' . $email . '</td>
              </tr>
              <tr>
                <td style="color: gray">Subscribe Date:</td>
                <td>' . $emailDate . '</td>
              </tr>
            </table>

            <div>
              <p style="margin-bottom: 20px">
                You now have
                <span
                  style="color: #6a1141; font-size: larger; font-weight: 600"
                  >' . $subscriberCount . '</span
                >
                Subscribers
              </p>
            </div>
            <div>
              <a
                href="https://frontlinebusiness.com.ph/login"
                style="
                  text-decoration: none;
                  background-color: #6a1141;
                  padding: 10px 30px;
                  border-radius: 50px;
                  color: white;
                  display: inline-block;
                "
                >View Subscribers</a
              >
            </div>
          </div>
        </section>
      </section>
    </div>
  </body>
';
  return $html;
}
