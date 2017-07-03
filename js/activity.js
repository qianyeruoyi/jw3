$(function(){
    var ul=document.getElementById('actul');
    var btn=document.getElementsByClassName('zixun1')[0];
    btn.onclick=function(){
        ul.innerHTML+=ul.innerHTML;
    }
})