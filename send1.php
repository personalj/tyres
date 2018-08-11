<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['tel'])&&$_POST['phone']!="")){
        $to = 'popelaleksandr@gmail.com'; 
        $subject = 'Contact form'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>tel: '.$_POST['tel'].'</p>
                        <p>Message: '.$_POST['textarea'].'</p>                  
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: user \r\n"; 
        mail($to, $subject, $message, $headers);
}
?>