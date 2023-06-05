<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- style link -->
    <link rel="stylesheet" href="style.css">
    <!-- ajax link -->
    <!-- <script src="jquery-3.6.4.min.js"></script> -->
    <title>PROTOCOL_TABLE</title>
</head>
<body>


<?php 
$db = mysqli_init();
if ($db -> real_connect('localhost','root','','employees')):
    
    $arr = $db -> query("SELECT * FROM `PROTOCOL_TABLE` order by id asc");
    if (!$arr) echo 'what?!';
    else $arr = $arr -> fetch_all();?>

<div class="dbContainer" id="dbContainer">

<div class="protocolTitle">Таблица с данными</div>

<table class="protocolTable">

    <tr class="dbFacade">
        <th>№ п\п</th>
        <th>Номер протокола</th>
        <th>Дата выдачи</th>
        <th>Ответственный (ФИО)</th>
        <th>Соответствие («да», «нет»)</th>
    </tr>
    
    <!-- <div class="wrapper"> -->
        <?php 
        foreach ($arr as $key => list($id, $number, $date, $text, $checkbox)):
        ?>

        <tr class="dbOutput">
            <td ><?php echo $id; ?></td>
            <td><?php echo $number; ?></td>
            <td><?php echo $date; ?></td>
            <td><?php echo $text; ?></td>
            <td><?php echo $checkbox; ?></td>
        </tr>
        
        <?php 
        endforeach;
        endif;
        ?>

    <!-- </div> -->


</table>

<a href="#addForm"><button class="btn">Добавить протокол</button></a>

</div> 

<div class="protocolForm">

    <div class="formTitle">Форма</div>

    <form method="post" class="form" id="addForm" enctype="multipart/form-data">
        
        <span>Номер протокола</span>
        <input type="number" name="number" id="" required>
        <span>Дата выдачи</span>
        <input type="date" name="date" id="" required>
        <span>Ответственный (ФИО)</span>
        <input type="text" name="text" id="" required>
        <span>Соответствие («да», «нет»)</span>
        <input type="checkbox" name="checkbox" id="" class="checkbox">


        <button type="submit" class="btn">Сохранить</button>

    </form>

</div>

    <!-- script link -->
    <script src="./script.js"></script>
</body>
</html>