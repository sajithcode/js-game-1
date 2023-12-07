var start =new Date().getTime();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }


function shapeAppear(){

    var top = Math.random()*500;
    var left = Math.random()*1200;
    var width = (Math.random()*400)+100;
    var height = (Math.random()*400)+100;
    if (Math.random()>0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }
    else{
        document.getElementById("shape").style.borderRadius = "0%";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
}
function shapeAppearDelay(){
    setTimeout(shapeAppear, Math.random()*1200);
}

shapeAppearDelay();
var clicks  = 1;
document.getElementById("shape").onclick = function(){
    
    document.getElementById("shape").style.display = "none";
    var end =new Date().getTime();
    var time = (end - start)/1000;
    //time  = Math.floor(time);
    //alert(time);
    document.getElementById("time").innerHTML = time+"s";
    document.getElementById("clicks").innerHTML= clicks;
    shapeAppearDelay();
    clicks = clicks+1
}