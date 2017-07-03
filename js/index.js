$(function(){
    $('.code').click(function(){
        if($('.code').css('left')!='-128px'){
            $(this).animate({'left':'-128px'},1000);
        }
        else if($('.code').css('left')!=0){
            $(this).animate({'left':'0'},1000);
        }
    })

    // 门派选项卡
    $('.bd').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p1').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-bd').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-bd').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.cg').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p2').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-cg').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-cg').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.cy').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p3').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-cy').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-cy').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.gb').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p4').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-gb').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-gb').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.cyy').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p5').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-cyy').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-cyy').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.cj').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p6').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-cj').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-cj').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.sl').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p7').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-sl').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-sl').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.wd').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p8').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-wd').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-wd').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.tc').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p9').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-tc').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-tc').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.tm').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p10').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-tm').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-tm').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.qx').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p11').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-qx').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-qx').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.mj').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p12').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-mj').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-mj').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    $('.wh').click(function(){
        $(this).css('color','#e86656').siblings('li').css('color','#444');
        $('.school-p13').fadeIn('1000').siblings('p').fadeOut('1000');
        $('.school-wh').fadeIn('1000').animate({'right':'-57px'},1000).siblings('.school-show>li').css('display','none');
        $('.d-wh').animate({'left':'3px'},1000).siblings('.show').animate({'left':'-400px'},100);
    })

    // 选项卡右侧 同人 鼠标经过效果
    $('#tr1').mouseover(function(){
        $(this).find('span').css('background-position','-1px -202px')
    })
    $('#tr2').mouseover(function(){
        $(this).find('span').css('background-position','-39px -202px')
    })
    $('#tr3').mouseover(function(){
        $(this).find('span').css('background-position','-78px -202px')
    })
    $('#tr4').mouseover(function(){
        $(this).find('span').css('background-position','-117px -202px')
    })
    $('#tr5').mouseover(function(){
        $(this).find('span').css('background-position','-154px -202px')
    })
    $('#tr6').mouseover(function(){
            $(this).find('span').css('background-position','-191px -202px')
     })

    $('#tr1').mouseout(function(){
        $(this).find('span').css('background-position','-1px -170px')
    })
    $('#tr2').mouseout(function(){
        $(this).find('span').css('background-position','-39px -170px')
    })
    $('#tr3').mouseout(function(){
        $(this).find('span').css('background-position','-78px -170px')
    })
    $('#tr4').mouseout(function(){
        $(this).find('span').css('background-position','-117px -170px')
    })
    $('#tr5').mouseout(function(){
        $(this).find('span').css('background-position','-154px -170px')
    })
    $('#tr6').mouseout(function(){
            $(this).find('span').css('background-position','-191px -170px')
     })


// 攻略站卷动效果
$('.juan>li').click(function(){
    $(this).next('.xx').slideDown('slow').siblings('.xx').slideUp('slow');
    $(this).css('color','#E86656').siblings().css('color','#444');
    $(this).css('border-bottom','1px solid #fff').siblings().css('border-bottom','1px dotted #f0f0f0');
})


// 登录模态框

$('#useri').focus(function(){
    $('#userp').html("&#160; 请填写您的通行证账号");
    $('#userp').css('background-position','0px -20px')
})
$('#useri').blur(function(){
    $('#userp').html("");
    $('#userp').css('background-position','999px -999px')
})
$('#passi').blur(function(){
    $('#passp').html("");
    $('#passp').css('background-position','999px -999px')
})
$('#passi').focus(function(){
    $('#passp').html("&#160; 请输入您的密码");
    $('#passp').css('background-position','0px -20px')
})


$('#dl').click(function(){
    if(!/^[a-z]\w[a-zA-Z0-9]{2,10}/.test($('#useri').val())){
        $('#tishi').html("&#160;用户名不正确"+"<"+"br"+">"+"请输入以字母开头的用户名");
    }else if($('#useri').val()==''){
        $('#tishi').html("&#160;用户名不能为空"+"<"+"br"+">"+"请输入用户名");
    }else if($('#passi').val()==''){
        $('#tishi').html("&#160;密码不能为空"+"<"+"br"+">"+"请输入密码");
    }else{
        $('#tishi').html("&#160;您已成功登陆");
    }
})


})