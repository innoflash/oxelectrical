<?php
/**
 * Created by PhpStorm.
 * User: BILL
 * Date: 1/26/2017
 * Time: 10:01 PM
 */
if (!isset($_POST['username']) || !isset($_POST['email']) || !isset($_POST['message'])) {
    header('Location: tm-contact-us.php');
} else {
    require_once('ox-header.php');
    $user_name = $_POST['username'];
    $user_email = $_POST['email'];
    $user_report = $_POST['message'];
    $subject = $_POST['service'];
    $phone = $_POST['phone'];

    $to = 'ita.solutions.cafe@gmail.com';
    $body = $user_report . '."\n\n".(' . $user_email.')';
    $headers = 'From: ' . $user_name . ' <'.$user_email.'>';

    if (mail($to, $subject, $body, $headers)) {
        echo '<h3>Hey ' . $user_name . ', we have received your message, we will contact you shortly. Thanks for getting in touch !!!!</h3>';
    } else
        echo '<h2>Connection failure, can`t send you message at the moment</h2>';
    require_once('ox-footer.php');
}

