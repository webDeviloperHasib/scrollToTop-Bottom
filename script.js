let btn = document.querySelector('.btn');

window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
}


btn.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})