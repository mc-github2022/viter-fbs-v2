<?php

function getHtmlSendMessage(
  $unsubscribe_link,
  $newsletter,
  $newKey,
  $ROOT_DOMAIN
) {

  $html = '
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
    </head>
    <body>
      <div>' . $newsletter . '</div>
   
      <div
        class="footer"
        style="
        padding-bottom: 16px;
     margin-bottom: 0;
        text-align: center;
        background-color: #fff;">
        <div style="text-align: center; line-height: 1; width: 420px; margin: 0 auto;">
            <div> <small>
            <a style="font-size: 14px;  text-decoration: underline; font-family: Arial, Helvetica, sans-serif" href="' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $newKey . '">Unsubscribe</a></small>
          </div>
          <p style="font-size: 14px; padding: 0 10px">
          <small>
            Having issues with the link? Try to paste this text on your browser
            URL:  <br />
            <a
              target="_blank"
              rel="nofollow"
              style="
                font-size: 12px;
                font-family: Arial, Helvetica, sans-serif;
                text-decoration: none;
                color: #505050;
              "
              >' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $newKey . '</a
      >
      </small>
      </p>
              </div>
      </div>
    </body>
  </html>
  ';

  return $html;
}
