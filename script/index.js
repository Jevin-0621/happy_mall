! function($) {
    //检测是否用户已经登录
    if (localStorage.getItem('loginname')) {
        $('.admin-2').show();
        $('.admin-1').hide();
        $('.admin-name').html(localStorage.getItem('loginname'));
    }

    //退出登录 - 删除本地存储
    $('.layout').on('click', function() {
        $('.admin-2').hide();
        $('.admin-1').show();
        localStorage.removeItem('loginname');
    });

    //二级菜单
    $('.nav-li').hover(function() {
        $(".index_type").show();

    }, function() {
        $(".index_type").hide();
    });

    $(".index_type").hover(function() {
        $(".index_type").show();
    }, function() {
        $(".index_type").hide();
    });

    $('.index_type li').hover(function() {
        // alert(this);//li
        this.style.color = 'rgba(244,72,20,1)';
        this.style.background = '#fff';

        // this.
    }, function() {
        this.style.background = 'rgba(244,72,20,1)';
        this.style.color = '#fff';

    });
    //cartlist
    const $list = $('.index_type li');
    const $cartlist = $('.cartlist');
    // const $items = $('.cartlist item');???
    const $items = $('.item');
    $list.hover(function() {
        $cartlist.show();
        $items.eq($(this).index()).show().siblings('.item').hide();
        // console.log($(this).index());
        //改变右侧的大盒子的位置
        let $scrolltop = $(window).scrollTop();
        let $bannertop = $('.header-bottom').offset().top;
        if ($scrolltop > $bannertop) {
            $cartlist.css({
                top: $scrolltop - $bannertop
            });
        } else {
            $cartlist.css({
                top: 40
            });
        }
    }, function() {
        $cartlist.hide();
    });

    //2.鼠标移入右侧的大盒子，大盒子依然显示隐藏
    $cartlist.hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });

    //tab切换
    var $lists = $('.menu li').not('.active1');
    // var $ullists = $('.box ul');
    var $timer = null;
    console.log($lists);
    // console.log($ullists);
    $lists.on('click', function() {
        $timer = setTimeout(() => {
            $(this).addClass('active1').siblings('li').removeClass('active1');
            // $ullists.eq($(this).index()).addClass('show').siblings('ul').removeClass('show');
        }, 100)
    });
    $lists.on('mouseleave', function() {
        // $lists.on('mouseout', function() {
        // console.log(11);
        clearTimeout($timer);
    });


    //轮播图
    /*  var $lists = $('.banner-c ul li');
    var $dots = $('ol li')
    var $left = $('.left');
    var $right = $('.right');
    var $banner = $('.banner-c');
    var $num = 0;
    //小圆点
    for (var i = 0; i < $dots.length; i++) {
        $dots[i].index = i;
        $dots[i].onmouseover = function() {
            $num = this.index;
            lunbo($num);
        }
    }
    // 轮播函数
    function lunbo($num) {
        for (var j = 0; j < $dots.length; j++) {
            $dots[j].className = '';
            $lists[j].style = 'opacity: 0';
        }
        $dots[$num].className = 'active';
        $lists[$num].style = 'opacity: 1';
    }

    $left.on('click', () => {
        if ($num <= 0) {
            $num = 7;
        } else {
            $num--;
        }
        lunbo($num);
    });
    $right.on('click', () => {
        if ($num >= 7) {
            $num = 0;
        } else {
            $num++;
        }
        lunbo($num);
    });
    //自动轮播
    var $timer;
    var $auto = function() {
        if ($num >= 7) {
            $num = 0;
        } else {
            $num++;
        }
        lunbo($num);
    }
    $timer = setInterval(function() {
        $auto();
    }, 2000);
    $banner.on('mouseover', () => {
        clearInterval($timer);
    });
    $banner.on('mouseout', () => {
        $timer = setInterval(function() {
            $auto();
        }, 2000);
    }); //
 */


}(jQuery);