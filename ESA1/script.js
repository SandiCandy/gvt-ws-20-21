"use strict";

// alert("Hello " + navigator.product);

const greeting = "moin!"

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
		case('S'):
            // triggerDiscAnimation();
            console.log("Spin")
            break;
        default:
            console.log('Miaaaau')
	}
}

function rotateRight() {
    let view = document.getElementById('view');
    let intNewPosY = parseInt(view.style.backgroundPositionY) - 758;
    view.style.backgroundPositionY = intNewPosY + "px";
}

function rotateLeft() {
    let view = document.getElementById('view');
    let intNewPosY = parseInt(view.style.backgroundPositionY) + 758;
    view.style.backgroundPositionY = intNewPosY + "px";
}

function loadSprite(filename) {
    console.log('looooooooad.')
    let imgObj = new Image();
    imgObj.src = "file:///Users/sandra/Desktop/GVT/ESA1/images/" + filename;
    imgObj.onload = function() {
        let view = document.getElementById('view');
        view.style.backgroundImage = "url('file:///Users/sandra/Desktop/GVT/ESA1/images/css_sprites.png')";
        view.style.backgroundPosition = "-10px -10px";
        view.style.backgroundRepeat = "no-repeat"
    }
}
