<?php
//cors解决跨越:所有的用户都可以访问。
header('Access-Control-Allow-Origin:*');  //允许任意的域名访问
header('Access-Control-Allow-Method:POST,GET'); //允许请求方式是get和post

include "conn.php";


//检测用户名是否重名
if (isset($_POST['username'])) {
    $user = $_POST['username'];
    $result = $conn->query("select * from registry1903 where username='$user'");
    if ($result->fetch_assoc()) { //存在
        echo true; //1
    } else {
        echo false; //空
    }
}

//接收前端表单提交的数据
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $repass = sha1($_POST['repass']);
    $email = $_POST['email'];
    $conn->query("insert registry1903 values(null,'$username','$password','$repass','$email',NOW())");
    header('location:http://10.31.161.68/dashboard/Javascript/project/happy_mall/src/login.html');
}