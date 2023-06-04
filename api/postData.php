<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$cfg = [

    'hostname' => 'localhost',
    'username' => 'root',
    'password' => '',
    'database' => 'employees'
];

// function checkboxFunc ($check){
//     if ($check == 'on') {
//         return 'да';
//     }
//     return 'нет';
// };

function checkboxFunc($check){
    return ($check == 'on')?'да':'нет';
}

$number = $_POST['number'];
$date = $_POST['date'];
$text = $_POST['text'];
$checkbox = checkboxFunc($_POST['checkbox']);


$sql = "INSERT INTO `PROTOCOL_TABLE`( `Номер протокола`, `Дата выдачи`, `Ответственный сотрудник`, `Признак соответствия значений в протоколе нормам`) VALUES ('$number','$date','$text','$checkbox')";

// check
print_r($sql);

$db = mysqli_init();


if (!$db -> real_connect($cfg['hostname'], $cfg['username'],$cfg['password'], $cfg['database'])) {
    echo 'real connect error';
    exit (1);
}


// db check if the protocol number exists

// $check_number_query = "SELECT COUNT(*) FROM PROTOCOL_TABLE WHERE `Номер протокола`='$number'";
// $result = $db -> query($check_number_query);

// if ($result === false) {
//     echo 'mysqli_query error';
// } else {
//     $rows = mysqli_num_rows($result);
//     if ($rows > 0) {
//         echo 'номер протокола уже существует!';
//         // it has to be sth
//         exit(2);
//     } else {
//         // continue with the INSERT query
//         if ($db -> query($sql) !== false) {
//             echo 'ok';
//         } else {
//             echo 'mysqli_query error';
//             exit(3);
//         }
//     }
// }


// first  approach
// if (mysqli_query($db, $sql) !== false) {
//     echo 'ok';
// } else {
//     echo 'mysqli_query error';
// }


// second approach
if ($db -> query($sql) !== false) {
    echo 'ok';
} else {
    echo 'mysqli_query error';
}

$db -> close();
 

