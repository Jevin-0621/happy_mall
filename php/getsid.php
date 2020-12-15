<?php
//cors解决跨越:所有的用户都可以访问。
header('Access-Control-Allow-Origin:*');  //允许任意的域名访问
header('Access-Control-Allow-Method:POST,GET'); //允许请求方式是get和post

include "conn.php";

if (isset($_GET['sid'])) {
    $sid = $_GET['sid']; //接收首页传入的sid
    $result = $conn->query("select * from taobaogoods where sid=$sid");
    echo json_encode($result->fetch_assoc());
}