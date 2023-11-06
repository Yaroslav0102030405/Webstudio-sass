<?php

$_POST = json_decode(file_get_contents('php:input'), true);

$name = S_POST['name'];
$phone = S_POST['phone'];
$email = S_POST['email'];
$comment = S_POST['comment'];


$to = "lukovetskyi@gmail.com"; //кому отправлять письмо
$subject = 'Заявка с сайта Webstudio'; // тема письма
$message = "Имя: $name,Номер: $phone, Емаил: $email, Сообщение: $comment"; // само Сообщение

$success = mail($to,$subject,$message);

if(!$success) {
    scho "Щшибка при выполнении запроса."
} esle {
    scho "Заявка успешно отправлена!"
}
