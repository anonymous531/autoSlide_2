$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
let n=1
setInterval(function(){
    $(`.images > img:nth-child(${justifyN(n)})`).removeClass('current').addClass('leave')
    .one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.images > img:nth-child(${justifyN(n+1)})`).removeClass('enter').addClass('current')
    n++
},3000)
function justifyN(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}