var canvas = document.getElementById("canvas");
var styleSelect = document.getElementById("strokeStyleSelect");
var guideWire = document.getElementById("guidewireCheckbox");
var eraseBtn = document.getElementById("eraseAllButton");
var ctx = canvas.getContext("2d");
var startPoint = {};
var flag = false;
var imageData;
var guide = guideWire.checked;


canvas.onmousedown=function(e){
    imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
    flag = true;
    startPoint=windowToCanvas(e);
}
canvas.onmousemove=function(e){
    if(flag){
        var loc=windowToCanvas(e);
        updateLine(loc);
        // updateRect(loc);
        if(guide){
            updateGuide(loc);
        }
    }


}

canvas.onmouseup=function(e){
    flag = false;
    var loc =windowToCanvas(e);
    ctx.putImageData(imageData,0,0);
    updateLine(loc);
    // updateRect(loc);
}

function windowToCanvas(e){
    var rect=canvas.getBoundingClientRect();
    var x=e.clientX-rect.left;
    var y=e.clientY-rect.top;
    return{
        x:x,
        y:y
    }
}

function updateLine(loc){
    ctx.putImageData(imageData,0,0);
    ctx.beginPath();
    ctx.moveTo(startPoint.x,startPoint.y);
    ctx.lineTo(loc.x,loc.y);
    ctx.stroke();
}

// function updateRect(loc) {
//     ctx.putImageData(imageData,0,0);
//     ctx.beginPath();
//     var x,y,w,h;
//     if(startPoint.x>loc.x) x = loc.x;
//     else x = startPoint.x;
//     if(startPoint.y>loc.y) y = loc.y;
//     else y = startPoint.y;
//     w = Math.abs(loc.x - startPoint.x);
//     h = Math.abs(loc.y - startPoint.y);
//     ctx.rect(x,y,w,h);
//     ctx.stroke();
// }
function updateGuide(loc){
    ctx.save();
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(loc.x,0);
    ctx.lineTo(loc.x,canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0,loc.y);
    ctx.lineTo(canvas.width,loc.y);
    ctx.stroke();
    ctx.restore();}

styleSelect.onchange = function(){
    ctx.strokeStyle = styleSelect.value;
}

guideWire.onchange = function () {
    guide = guideWire.checked;
}

eraseBtn.onclick = function () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}