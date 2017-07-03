$(function(){
    $('.lovejs li a').each(function () {
                if ($($(this))[0].href == String(window.location))
                    $(this).addClass('commen').attr('href', 'javascript:void(0);');
            });
})