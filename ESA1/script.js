"use strict";

// alert("Hello " + navigator.product);

const greeting = "moin!"

function loadImage(filename) {
    alert("Load...")
    var imageObj = new Image();
    imageObj.src = "file:///Users/sandra/Desktop/GVT/ESA1/images/" + filename;
    imageObj.onload = function() {
        var img = document.getElementById('x');
        img.setAttribute('src', this.src);
    };
    
}

function myFunc(text) {
    alert(text);
}

