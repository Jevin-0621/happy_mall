define([], function() {
    return {
        init: function() {
            //1.表单验证。
            let $form = $('#form1'); //form表单。
            let $username = $('[name=username]'); //用户名。
            let $email = $('[name=email]'); //邮箱
            let $password = $('[name=password]'); //密码
            let $tel = $('[name=tel]'); //手机号码
            let $span = $('#form1 span'); //4个span
            // 定义检测标记
            $userflag = true;
            $passflag = true;
            $emailflag = true;
            $telflag = true;
            //用户名检测
            $username.on('focus', function() {
                $span.eq(0).html('中英文均可，最长14个英文或7个汉字').css('color', '#333');
            });
            $username.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $strLen = $value.replace(/[\u4e00-\u9fa5]/g, '**').length; //中文当做两个字符
                    if ($strLen > 0 && $strLen <= 14) {
                        let $reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                        if ($reg.test($value)) {
                            $span.eq(0).html('√').css('color', 'green');
                            $userflag = true;
                            //用户名格式没有问题，将用户名传给后端。
                            $.ajax({
                                type: 'post',
                                url: 'http://10.31.161.68/dashboard/Javascript/happy_mall/php/reg.php',
                                data: {
                                    username: $username.val()
                                }
                            }).done(function(data) {
                                if (!data) { //不存在
                                    $span.eq(0).html('√').css('color', 'green');
                                } else { //存在
                                    $span.eq(0).html('该用户名已存在').css('color', 'red');
                                }
                            });
                        } else {
                            $span.eq(0).html('用户名格式有误').css('color', 'red');
                            $userflag = false;
                        }
                    } else {
                        $span.eq(0).html('用户名长度有误').css('color', 'red');
                        $userflag = false;
                    }
                } else {
                    $span.eq(0).html('用户名不能为空').css('color', 'red');
                }
            });
            //手机
            $tel.on('focus', function() {
                $span.eq(1).html('请输入11位正确的手机号码').css('color', '#333');
            });
            $tel.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $reg = /^1[3|5|8]\d{9}$/;
                    if ($reg.test($value)) {
                        $span.eq(1).html('√').css('color', 'green');
                        $telflag = true;
                    } else {
                        $span.eq(1).html('手机号码格式有误').css('color', 'red');
                        $telflag = false;
                    }
                } else {
                    $span.eq(1).html('手机号码不能为空').css('color', 'red');
                    $telflag = false;
                }
            });
            // alert(11);
            //密码验证
            //密码判断
            $password.on('focus', function() {
                $span.eq(2).html('密码最少8位').css('color', '#f00')
                $passflag = false;
            });
            $password.on('input', function() {
                let $value = $(this).val();
                if ($value !== '') {
                    //判断密码是否满足8位以上
                    if ($value.length < 8) {
                        $span.eq(2).html('密码至少8位').css('color', '#f00');
                        $passflag = false;
                    } else {
                        //密码强度判断
                        var $num = 0;
                        // console.log(this.value)
                        if (/\d+/.test($value)) {
                            $num++;
                        }
                        if (/[a-z]+/.test($value)) {
                            $num++;
                        }
                        if (/[A-Z]+/.test($value)) {
                            $num++;
                        }
                        if (/[\W_]+/.test($value)) {
                            $num++;
                        }
                        console.log($num);
                        switch ($num) {
                            case 1:
                                $span.eq(2).html('密码较弱').css('color', 'red');
                                $passflag = false;
                                break;
                            case 2:
                            case 3:
                                $span.eq(2).html('密码中等').css('color', 'orange');
                                $passflag = true;
                                break;
                            case 4:
                                $span.eq(2).html('密码很安全').css('color', 'green');
                                $passflag = true;
                                break;
                            default:
                                break;
                        }
                    }
                } else {
                    $span.eq(2).html('密码不能为空').css('color', 'red');
                    pwdFlag = false;
                }
            })

            // 邮箱验证
            $email.on('focus', function() {
                $span.eq(3).html('请输入您的邮箱').css('color', '#333');
            });
            $email.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $reg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/

                    if ($reg.test($value)) {
                        $span.eq(3).html('√').css('color', 'green');
                        $emailflag = true;
                    } else {
                        $span.eq(3).html('邮箱格式有误').css('color', 'red');
                        $emailflag = false;
                    }
                } else {
                    $span.eq(3).html('邮箱不能为空').css('color', 'red');
                    $emailflag = false;
                }
            });

            //阻止表单的直接跳转。
            $form.on('submit', function() {
                if ($username.val() === '') {
                    $span.eq(0).html('用户名不能为空').css('color', 'red');
                    $userflag = false;
                }
                if ($tel.val() === '') {
                    $span.eq(1).html('手机号码不能为空').css('color', 'red');
                    $telflag = false;
                }
                if ($password.val() === '') {
                    $span.eq(2).html('密码不能为空').css('color', 'red');
                    $passflag = false;
                }
                if ($email.val() === '') {
                    $span.eq(3).html('邮箱不能为空').css('color', 'red');
                    $emailflag = false;
                }
                console.log($userflag, $telflag, $passflag, $emailflag)
                if (!$userflag || !$telflag || !$passflag || !$emailflag) {
                    return false;
                }
            });
        }
    }
});