$('.tab a').click(function(event){
        event.preventDefault();       //기본동작 작동x
        $('.tab a').removeClass('active');

        $(this).addClass('active');

        $('.tab_section').hide();         //모든 패널을 안보이게
        var aaa = $(this).attr('href');  //클릭한 a의 href의 값을 변수로 가져온다.
        console.log(aaa);

        $(aaa).show();                  //속성 href 값 (패널의 id 명과 동일)을 보여준다.
        

    });

    $('.tab .t01 a').trigger('click');


    $('.menu').click(function(){
        $('.gnb_wrap> ul').toggleClass('pc').toggleClass('mobile');
    });


    
    
