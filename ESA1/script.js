"use strict";

window.onkeydown = function(evt) {
	var key = evt.which ? evt.which : evt.keyCode;

	var c = String.fromCharCode(key);

	switch(c){
		case('R'):
            rotateRight();
		break;
		case('L'):
            rotateLeft();
		break;
		case('A'):
            animateBowl();
            console.log("Start animation")
            break;
        case('S'):
            console.log("riiiiiisenrad")
            animateFerrisWheel();
            break;
        default:
            console.log('Miaaaau')
	}
}

function rotateRight() {
    let view = document.getElementById('view');
    let pos = parseInt(view.style.backgroundPositionY);
    pos -= 758;
    pos > -26541 ? pos : pos= -10;
    view.style.backgroundPositionY = pos + "px";
}

function rotateLeft() {
    let view = document.getElementById('view');
    let pos = parseInt(view.style.backgroundPositionY);
    pos += 758;
    pos < -10 ? pos : pos= -26540;
    view.style.backgroundPositionY = pos + "px";
}

function loadSprite(filename, elementId) {
    let path = "file:///Users/sandra/Desktop/GVT/ESA1/images/"
    let imgObj = new Image();
    imgObj.src =  path + filename;
    imgObj.onload = function() {
        let view = document.getElementById(elementId);
        view.style.backgroundImage = "url('" + imgObj.src + "')";
        view.style.backgroundPosition = "-10px -10px";
        view.style.backgroundRepeat = "no-repeat"
    }
}

function animateBowl() {
    let view = document.getElementById('view');
    let pos = parseInt(view.style.backgroundPositionY);
    var id = setInterval(frame, 50);
    function frame() {
        // if(window.onkeydown = function(evt) {
        //     clearInterval(id);
        //     return;
        // })
        pos -= 758;
        pos > -26541 ? pos : pos= -10;
        view.style.backgroundPositionY = pos + "px";
    }
}

function animateFerrisWheel() {
    let view = document.getElementById('view2');
    let pos = parseInt(view.style.backgroundPositionY);
    var id = setInterval(frame, 200);
    function frame() {
        pos -= 520;
        pos > -2611 ? pos : pos= -10;
        view.style.backgroundPositionY = pos + "px";
    }
}


// function stopAnimation() {
//     let view = document.getElementById('view');
//     let pos = parseInt(view.style.backgroundPositionY);
// }
