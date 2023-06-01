<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
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

<div class="dbContainer">

    <div class="protocolTitle">Таблица с данными</div>

    <table class="protocolTable">

        <tr class="dbFacade">
            <th>№ п\п</th>
            <th>Номер протокола</th>
            <th>Дата выдачи</th>
            <th>Ответственный (ФИО)</th>
            <th>Соответствие («да», «нет»)</th>
        </tr>
         
        <?php 
        foreach ($arr as $key => list($id, $number, $date, $text, $checkbox)):
        ?>

        <tr class="dbOutput">
            <td class="N"><?php echo $id; ?></td>
            <td class="protocolNumber"><?php echo $number; ?></td>
            <td class="releaseDate"><?php echo $date; ?></td>
            <td class="executor"><?php echo $text; ?></td>
            <td class="conformity"><?php echo $checkbox; ?></td>
        </tr>
        <?php 
        endforeach;
        ?>
        <!-- <tr class="dbOutput">
            <td class="N">1</td>
            <td class="protocolNumber">32523562</td>
            <td class="releaseDate">25.04.19</td>
            <td class="executor">Иванов</td>
            <td class="conformity">Да</td>
        </tr> -->

    </table>


</div>

<?php 
endif; 
?>    

    <div class="protocolForm">

        <div class="formTitle">Форма</div>

        <form action="./api/postData.php" method="post" class="form" id="form" enctype="multipart/form-data">
            
            <span>Номер протокола</span>
            <input type="number" name="number" id="">
            <span>Дата выдачи</span>
            <input type="date" name="date" id="">
            <span>Ответственный (ФИО)</span>
            <input type="text" name="text" id="">
            <span>Соответствие («да», «нет»)</span>
            <input type="checkbox" name="checkbox" id="" class="checkbox">


            <button type="submit" class="btn">Submit</button>
            
        </form>
    </div>


    <!-- <script src="./ajax.js"></script> -->
</body>
</html>