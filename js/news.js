$(function(){
    // console.log(1)
    $.ajax({
        url:'json.json',
        type:'get',
        success:function(res){
            $.each(res.data,function (index,value){
                // console.log(index)
                 $('.yinj img').attr('src',value.img) 
                 $('.yinj').eq(index).find('span').html(value.text)
                })
        }

     })
})