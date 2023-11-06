<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];


$to = "lukovetskyi@gmail.com"; //кому отправлять письмо
$subject = 'Заявка с сайта webstudio'; // тема письма
$message = "Имя: $name, Номер: $phone, Емаил: $email, Сообщение: $comment"; // само Сообщение

$success = mail($to,$subject,$message);

if(!$success) {
    echo "Ошибка при выполнении запроса."
} 
esle {
    echo "Заявка успешно отправлена!"
}
