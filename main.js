initial()
var allButtons = $('.buttons > button')
var n=1
var timer = setInterval(function(){
    makeLeave(getImage(n)).one('transitionend',function(e){
        makeEnter($(e.currentTarget))
    })
    $(`.buttons > button:nth-child(${justifyN(n+1)})`).addClass('pink').siblings().removeClass('pink')
    makeCurrent(getImage(n+1))
    n++
},2000)



$('#window').on('mouseenter',function(e){
    window.clearInterval(timer)
})
$('#window').on('mouseleave',function(e){
    setInterval(function(){
        makeLeave(getImage(n)).one('transitionend',function(e){
            makeEnter($(e.currentTarget))
        })
        $(`.buttons > button:nth-child(${justifyN(n+1)})`).addClass('pink').siblings().removeClass('pink')
        makeCurrent(getImage(n+1))
        n++
    },2000)
})


function initial(){
    $('.images > img:nth-child(1)').addClass('current').siblings().addClass('enter')
    $('.buttons > button:nth-child(1)').addClass('pink')
}
function makeLeave(node){
    return node.removeClass('current').addClass('leave')
}
function makeEnter(node){
    return node.removeClass('leave').addClass('enter')
}
function makeCurrent(node){
    return node.removeClass('enter').addClass('current')
}
function getImage(n){
    return $(`.images > img:nth-child(${justifyN(n)})`)
}
function justifyN(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}