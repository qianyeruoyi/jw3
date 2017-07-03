$(function(){
      var mySwiper = new Swiper ('.swiper-container', {
                // direction: 'vertical',
                // loop: true,
            onInit:function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素 
                swiperAnimate(swiper); //初始化完成开始动画
            }, 
            onSlideChangeEnd: function(swiper){ 
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            } 
        })
    var i=0;
        var $btn = $('.section-btn li'),
            $wrap = $('.section-wrap'),
            $arrow = $('.arrow');
        
        /*当前页面赋值*/
        function up(){i++;if(i==$btn.length){i=0};}
        function down(){i--;if(i<0){i=$btn.length-1};}
        
        /*页面滑动*/
        function run(){
            $btn.eq(i).addClass('on').siblings().removeClass('on'); 
            $wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
        };
        
        /*右侧按钮点击*/
        $btn.each(function(index) {
            $(this).click(function(){
                i=index;
                run();
            })
        });
        
        /*翻页按钮点击*/
        $arrow.one('click',go);
        function go(){
            up();run(); 
            setTimeout(function(){$arrow.one('click',go)},1000)
        };
        
        /*响应鼠标*/
        $wrap.one('mousewheel',mouse_);
        function mouse_(event){
            if(event.deltaY<0) {up()}
            else{down()}
            run();
            setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
        };
        
        /*响应键盘上下键*/
        $(document).one('keydown',k);
        function k(event){
            var e=event||window.event;
            var key=e.keyCode||e.which||e.charCode;
            switch(key) {
                case 38: down();run();  
                break;
                case 40: up();run();    
                break;
            };
            setTimeout(function(){$(document).one('keydown',k)},1000);
        }
    // });
 
    // 以上是插件


// 想写的第四部分的点击效果
$('.bp').click(function(){
    $('.sss1').css('height','26%');
    $('.sss2').css('height','96%');
    $('.sss3').css('height','96%');
    $('.sss4').css('height','96%');
    $('.section-4').css('background','url(img/feature/p3_bg3.jpg)');
    $('.section-4').css('background-size','cover');
    $('.d-bp').fadeIn('slow').siblings('.know').fadeOut('slow');
    $('.p-bp').css('z-index','4').siblings('.wan-p').css('z-index','2');
})
$('.st').click(function(){
    $('.sss2').css('height','26%');
    $('.sss1').css('height','96%');
    $('.sss3').css('height','96%');
    $('.sss4').css('height','96%');
    $('.section-4').css('background','url(img/feature/p3_bg4.jpg)');
    $('.section-4').css('background-size','cover');
    $('.d-st').fadeIn('slow').siblings('.know').fadeOut('slow');
    $('.p-st').css('z-index','4').siblings('.wan-p').css('z-index','2');
})
$('.hy').click(function(){
    $('.sss3').css('height','26%');
    $('.sss1').css('height','96%');
    $('.sss2').css('height','96%');
    $('.sss4').css('height','96%');
    $('.section-4').css('background','url(img/feature/p3_bg2.jpg)');
    $('.section-4').css('background-size','cover');
    $('.d-hy').fadeIn('slow').siblings('.know').fadeOut('slow');
    $('.p-hy').css('z-index','4').siblings('.wan-p').css('z-index','2');
})
$('.dx').click(function(){
    $('.sss4').css('height','26%');
    $('.sss1').css('height','96%');
    $('.sss2').css('height','96%');
    $('.sss3').css('height','96%');
    $('.section-4').css('background','url(img/feature/p3_bg1.jpg)');
    $('.section-4').css('background-size','cover');
    $('.d-dx').fadeIn('slow').siblings('.know').fadeOut('slow');
    $('.p-dx').css('z-index','4').siblings('.wan-p').css('z-index','2');
})


// 玩法中点击就出现的动画效果，看到漫天星星
$('.pvone').click(function(){
    $('.pv6').fadeIn(100).animate({'top':'-102px','left':'-72px'},1000);
    $('.pv7').fadeIn(100).animate({'bottom':'-102px','left':'-72px'},1000);
})
$('.pvtwo').click(function(){
    $('.pv8').fadeIn(100).animate({'top':'-102px','left':'-72px'},1000);
    $('.pv9').fadeIn(100).animate({'bottom':'-102px','left':'-72px'},1000);
    $('.pv10').fadeIn(100).animate({'bottom':'-102px','right':'-70px'},1000);
})
$('.pvthere').click(function(){
    $('.pv11').fadeIn(100).animate({'top':'-102px','left':'-72px'},1000);
    $('.pv4').fadeIn(100).animate({'right':'-71px','top':'-102px'},1000);
    $('.pv12').fadeIn(100).animate({'bottom':'-102px','right':'-70px'},1000);
    $('.pv5').fadeIn(100).animate({'right':'-172px','bottom':'0'},1000);
})


// 左侧分页器点击
$('#fen1').click(function(){
    $('.nav').css('background-position','-150px 0');
    $('.shenfen').css('top','240px')
    $('.shouye').css('top','170px')
    $('.wanfa').css('top','303px')
    $('.quanzi').css('top','365px')
})
var timer=null;
timer=setInterval(function(){
    if($('#fen1').attr("class")=="on"){
    $('.nav').css('background-position','-150px 0');
    $('.shenfen').css('top','240px')
    $('.shouye').css('top','170px')
    $('.wanfa').css('top','303px')
    $('.quanzi').css('top','365px')
    }else if($('#fen2').attr("class")=='on'){
        $('.nav').css('background-position','-225px 0');
    $('.shenfen').css('top','233px')
    $('.shouye').css('top','163px')
    }else if($('#fen3').attr('class')=='on'){
        $('.nav').css('background-position','-300px 0');
    $('.shenfen').css('top','227px')
    $('.shouye').css('top','163px')
    $('.wanfa').css('top','296px')
}else if($('#fen4').attr("class")=="on"){
    $('.nav').css('background-position','-375px 0');
    $('.shenfen').css('top','227px')
    $('.shouye').css('top','163px')
    $('.wanfa').css('top','289px')
    $('.quanzi').css('top','358px')
}
},100)
$('#fen2').click(function(){
    $('.nav').css('background-position','-225px 0');
    $('.shenfen').css('top','233px')
    $('.wanfa').css('top','304px')
    $('.quanzi').css('top','365px')
    $('.shouye').css('top','163px')
})
$('#fen3').click(function(){
    $('.nav').css('background-position','-300px 0');
    $('.shenfen').css('top','227px')
    $('.shouye').css('top','163px')
    $('.quanzi').css('top','365px')
    $('.wanfa').css('top','296px')
})
$('#fen4').click(function(){
    $('.nav').css('background-position','-375px 0');
    $('.shenfen').css('top','227px')
    $('.shouye').css('top','163px')
    $('.wanfa').css('top','289px')
    $('.quanzi').css('top','358px')
})
// $('#fen5').click(function(){
//     $('.nav').css('background-position','-450px 0');
//     $('.quanzi').css('top','351px')
//     $('.shenfen').css('top','227px')
//     $('.shouye').css('top','163px')
//     $('.wanfa').css('top','289px')
// })






// 正方体鼠标经过效果
// $('.div1 div').mouseover(function(event){
//     $('.div1').removeClass('dong');
//     // $('.div2').removeClass('dong');
//     $(this).find('img').css('width','756px');
//     $(this).css('transform','translateY(150px)');
//     $(this).css('transform','translateY(0px) rotateX(0deg) translateZ(0px)');
//     $(this).css('z-index','100').siblings().css('z-inxex','-1');

//     $(this).find('img').css('height','534px');
//     return false;
// })
// $('.div2 div').mouseover(function(event){
//     $('.div2').removeClass('dong');
//     $(this).find('img').css('width','756px');
//     $(this).find('img').css('height','534px');
//     return false;
// })


})

