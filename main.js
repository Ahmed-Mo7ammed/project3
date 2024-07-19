


addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll('button').forEach(function(buttons){

    buttons.onclick=function(){

        let text=document.querySelector('#text').style.color=buttons.dataset.color;

    }
 })

})