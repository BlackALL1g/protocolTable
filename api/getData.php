<?php

$cfg = ['hostname' => 'localhost', 'username' => 'root', 'password' => '', 'database' => 'employees'];

$db = mysqli_init();
$db -> real_connect($cfg['hostname'], $cfg['username'], $cfg['password'], $cfg['database']);

if ($db -> connect_errno)
    die('Query error: ' . $db -> connect_error);


$res = $db->query('SELECT * FROM PROTOCOL_TABLE ORDER BY id ASC');

if (!$res) {
    die('Query error: ' . $db->error);
}

$data = $res->fetch_all(MYSQLI_ASSOC);

header('Content-Type: application/json');
echo json_encode($data);