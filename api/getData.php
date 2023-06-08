<?php

$cfg = ['hostname' => 'localhost', 'username' => 'root', 'password' => '', 'database' => 'employees'];

$db = mysqli_init();
$db -> real_connect($cfg['hostname'], $cfg['username'], $cfg['password'], $cfg['database']);

if ($db -> connect_errno)
    die('Query error: ' . $db -> connect_error);

$result = $db->query('SELECT * FROM PROTOCOL_TABLE ORDER BY id ASC');

if (!$result) {
    die('Query error: ' . $db->error);
}

$result = $result -> fetch_all();

echo json_encode($result);

$db -> close();
?>