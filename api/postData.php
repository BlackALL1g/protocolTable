<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$cfg = [

    'hostname' => 'localhost',
    'username' => 'root',
    'password' => '',
    'database' => 'employees'
];

function checkboxFunc($check){
    return ($check == 'on')?'да':'нет';
}

$number = $_POST['number'];
$date = $_POST['date'];
$text = $_POST['text'];
$checkbox = checkboxFunc($_POST['checkbox']);


$db = mysqli_init();


if (!$db -> real_connect($cfg['hostname'], $cfg['username'],$cfg['password'], $cfg['database'])) {
    echo 'real connect error';
    exit (1);
}

$sql = "INSERT INTO `PROTOCOL_TABLE`( `Номер протокола`, `Дата выдачи`, `Ответственный сотрудник`, `Признак соответствия значений в протоколе нормам`) VALUES ('$number','$date','$text','$checkbox')";

// check
echo "\n";
print_r($sql);
echo "\n";


// db check if the protocol number exists
$check_number_query = "SELECT COUNT(*) FROM PROTOCOL_TABLE WHERE `Номер протокола`='$number'";
$result = $db -> query($check_number_query);
$rows = mysqli_fetch_row($result);



echo "\n";
print_r($check_number_query);
echo "\n";
print_r($result);
echo "\n";
print_r($rows);
echo "\n";


if ($rows[0] > 0) {
    echo 'номер протокола уже существует!';
} else {
    // continue with the INSERT query
    if ($db -> query($sql) !== false) {
        echo 'ok';
    } else {
        echo 'mysqli_query error';
    }
}

$db -> close();



// first approach
// function checkboxFunc ($check){
//     if ($check == 'on') {
//         return 'да';
//     }
//     return 'нет';
// };

// second approach
// function checkboxFunc($check){
//     return ($check == 'on')?'да':'нет';
// }


// first  approach
// if (mysqli_query($db, $sql) !== false) {
//     echo 'ok';
// } else {
//     echo 'mysqli_query error';
// }


// second approach
// if ($db -> query($sql) !== false) {
//     echo 'ok';
// } else {
//     echo 'mysqli_query error';
// }

 

