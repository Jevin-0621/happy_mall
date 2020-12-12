! function($) {
    $('.nav-li').hover(function() {
        $(".index_type").show();

    }, function() {
        $(".index_type").hide();
    });

    $(".index_type_ul").hover(function() {
        $(".index_type").show();
    }, function() {
        $(".index_type").hide();
    });

    $('.index_type_ul .li_has_down').hover(function() {
        // alert(this);//li
        this.style.background = 'red';
        // this.
    }, function() {
        this.style.background = '#fff';

    });
    //轮播图
    var $lists = $('.banner-c ul li');
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
    })
}(jQuery);