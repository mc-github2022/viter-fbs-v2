<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

include_once("mail-config.php");
include_once("template/subscriber-newsletter.php");

function sendNewsletter(
	$unsubscribe_link,
	$newsletter,
	$newsletterSubject,
	$subscriberEmail,
	$subscriberKey
) {
	//trigger exception in a "try" block
	try {
		$mail = new PHPMailer(true);
		$mail->CharSet = "UTF-8";
		$mail->isSMTP();
		$mail->Host = 'mail.frontlinebusiness.com.ph';
		$mail->Port = 465;
		$mail->SMTPSecure = "ssl";
		// $mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
		// $mail->Port = 587;
		// $mail->SMTPSecure = "tls";
		$mail->SMTPAuth = true;
		$mail->Username = USERNAME; // if gmail use your gmail email
		$mail->Password = PASSWORD; // if gmail use your email password
		$mail->Subject = "{$newsletterSubject}";
		$mail->setFrom(USERNAME, FROM);
		$mail->isHTML(true);
		$mail->Body = getHtmlSendMessage(
			$unsubscribe_link,
			$newsletter,
			$subscriberKey,
			ROOT_DOMAIN
		);

		// if email is not empty
		// send email
		if ($subscriberEmail != "") {
			$mail->addAddress($subscriberEmail);
			if ($mail->Send()) {
				// if successfully send
				// return response
				return array(
					"mail_success" => true,
					"error" => "No Error.",
					"email" => $subscriberEmail,
				);
			} else {
				return array(
					"error" => "Could not send email. Please refresh your page and try again.",
					"mail_success" => false
				);
			}
		}
		// if email is empty
		// return error response
		else {
			return array(
				"error" => "No email receiver found!.",
				"mail_success" => false
			);
		}
	}

	//catch exception
	catch (Exception $e) {
		return array(
			"mail_error" => $e->getMessage(),
			"error" => "Could not authenticate. Please make sure your email and password are correct.",
			"mail_success" => false
		);
	}
}
