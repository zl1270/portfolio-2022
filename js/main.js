


    var $mobileBtn = $('.gnb > li > a, .arrow');

    $mobileBtn.click(function(){ //서브메뉴 슬라이드

        if( !$(this).parents('li').is('.active') ){  //li에 .active가 없을 때(닫힌 상태)
            $('.gnb > li').removeClass('active');
            $(this).parents('li').addClass('active');
            $('.arrow').removeClass('on');
            $(this).siblings('.arrow').addClass('on')
        }else {
            $('.gnb > li').removeClass('active');
            $('.arrow').removeClass('on')
        }

    });


    $('.gnb_btn').click(function(){
        $('.gnb_btn > a').toggleClass('active');
        $('nav > ul').toggleClass('active');
    });









