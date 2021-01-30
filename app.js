
var i = 0;
let color = new Array("red","green","orange","purple","blue","black");
function changecolor(){
    document.getElementById('heading').style.color = color[i];
    i++;
    if(i>color.length)
    {
        i=0;
    }
    window.setTimeout("changecolor()", 2000)
}

let image = document.getElementById("dinoimg");
let images = ['dino1.jpg','dino2.jpg','dino3.jpg','dino4.jpg']
setInterval(function(){
    let random = Math.floor(Math.random()*4);
    image.src = images[random];
}, 2000);
