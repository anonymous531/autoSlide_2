initial();
let n = 1
setInterval(function(){
    makeLeave(getImage(n)).one('transitionend', (e)=>{
        makeEnter($(e.currentTarget))
    });
    makeCurrent(getImage(n+1))
    n++;
},3000)

function initial(){
    $('.images > img:nth-child(1)').addClass('current')
    $('.images > img:nth-child(2)').addClass('enter')
    $('.images > img:nth-child(3)').addClass('enter')
}
function getImage(n){
    return $(`.images > img:nth-child(${justifyN(n)})`)
}
function justifyN(n){
    if(n>3){
        n = n%3
        if(n===0){
            n=3
        }
    }
    return n
}
function makeLeave(node){
    node.removeClass('current').addClass('leave')
    return node
}
function makeEnter(node){
    node.removeClass('leave').addClass('enter')
    return node
}
function makeCurrent(node){
    node.removeClass('enter').addClass('current')
    return node
}