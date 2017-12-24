<?php

    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $to = 'caleb@caleb-cox.com';
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $body = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        // headers
        $headers = "From: ".$name." <".$email.">\r\n";
        $headers .= "Reply-To: ".$email."\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=utf-8";

        // send
        $send = mail($to, $subject, $body, $headers);
        // if ($send) {
        //     echo '<br>';
        //     echo 'Thanks for reaching out! I\'ll respond shortly!';
        // } else {
        //     echo 'Uh oh, there was an error sending your message!';
        // }
    }
?>