<?php

/* https://api.telegram.org/bot495127859:AAHFdVMOAYdXUFLL4zswM6ljr5-JiYj1k5s/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$token = "495127859:AAHFdVMOAYdXUFLL4zswM6ljr5-JiYj1k5s";
$chat_id = "-301064639";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Текст' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>