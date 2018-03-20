window.onload = function() {
    var div1 = document.getElementById("box");
    var distanceX = 0;
    var distanceY = 0;
    var dragging = false;
    div1.onmousedown = function (ev) {
        var oevent = ev || event;
        var zoom = parseInt(div1.style.zoom,10)||100;
        console.log("oevent"+oevent)
        console.log("offsetLeft"+div1.offsetLeft)
        console.log("offsetTop"+div1.offsetTop)
        console.log(zoom)
        distanceX = (oevent.clientX - div1.offsetLeft);
        distanceY = (oevent.clientY - div1.offsetTop);
        console.log("distanceX"+distanceX)
        console.log("distanceY"+distanceY)
        dragging = true;
        
    }
    document.onmousemove = function (ev) {
        if(dragging){
            var oevent = ev || event;
            div1.style.left = oevent.clientX - distanceX + 'px';
            div1.style.top = oevent.clientY - distanceY + 'px';
        }
        };
    document.onmouseup = function () {
        dragging = false;
    };
}
var changeSize = function(event){
    var obj = document.getElementById("box");
    var zoom = parseInt(obj.style.zoom,10)||100;
    if(!!event.wheelDelta){
        if (zoom>0) {
            if (event.wheelDelta>0) { zoom += 10;}else{zoom -= 10;}
            obj.style.zoom = zoom+'%';
        }else{
            return false;
        }
        
    }else{
        return false;
    }
}