let keyA = document.getElementById("keyA");
let keyB = document.getElementById("keyB");
let keyC = document.getElementById("keyC");
let keyD = document.getElementById("keyD");
let keyE = document.getElementById("keyE");
let keyF = document.getElementById("keyF");
let leftPlate = document.getElementById("left");
let rightPlate = document.getElementById("right");
let drumLine1 = document.getElementById("drumline1");
let drumLine2 = document.getElementById("drumline2");
let drumLine3 = document.getElementById("drumline3");
let drumLine4 = document.getElementById("drumline4");

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(e){
    e.preventDefault();
    if(e.code=='KeyA'){
        var audio = new Audio('./audio/platehigh.wav')
        audio.play();
        keyA.style["background-color"] = 'rgb(43, 43, 187)'
        keyA.style["width"] = "38px"
        keyA.style["height"] = "38px"
        leftPlate.style.transform = "rotate(-10deg)";
    }
    if(e.code=='KeyB'){
        var audio = new Audio('./audio/plate (1).wav')
        audio.play();
        keyB.style["background-color"] = 'rgb(43, 43, 187)'
        keyB.style["width"] = "38px"
        keyB.style["height"] = "38px"
        leftPlate.style.transform = "rotate(10deg)";
    }
    if(e.code=='KeyC'){
        var audio = new Audio('./audio/plate (2).wav')
        audio.play();
        keyC.style["background-color"] = 'rgb(43, 43, 187)'
        keyC.style["width"] = "38px"
        keyC.style["height"] = "38px"
        rightPlate.style.transform = "rotate(-10deg)";
    }
    if(e.code=='KeyD'){
        var audio = new Audio('./audio/plate (3).wav')
        audio.play();
        keyD.style["background-color"] = 'rgb(43, 43, 187)'
        keyD.style["width"] = "38px"
        keyD.style["height"] = "38px"
        rightPlate.style.transform = "translateY(8px)";
    }
    if(e.code=='KeyE'){
        var audio = new Audio('./audio/drum (1).wav')
        audio.play();
        keyE.style["background-color"] = 'rgb(43, 43, 187)'
        keyE.style["width"] = "38px"
        keyE.style["height"] = "38px"
        drumLine1.style.transform = "translateY(8px)";
        drumLine2.style.transform = "translateY(8px)";
        drumLine3.style.transform = "translateY(8px)";
        drumLine4.style.transform = "translateY(8px)";
    }
    if(e.code=='KeyF'){
        var audio = new Audio('./audio/drum (2).wav')
        audio.play();
        keyF.style["background-color"] = 'rgb(43, 43, 187)'
        keyF.style["width"] = "38px"
        keyF.style["height"] = "38px"
        drumLine1.style.transform = "translateY(8px)";
        drumLine2.style.transform = "translateY(8px)";
        drumLine3.style.transform = "translateY(8px)";
        drumLine4.style.transform = "translateY(8px)";
    }
}
function keyUp(e){
    if(e.code=='KeyA'){
        var audio = new Audio('./audio/platehigh.wav')
        audio.play();
        keyA.style["background-color"] = 'blue'
        keyA.style["width"] = "30px"
        keyA.style["height"] = "30px"
        leftPlate.style.transform = "rotate(0deg)";
    }
    if(e.code=='KeyB'){
        var audio = new Audio('./audio/plate (1).wav')
        audio.play();
        keyB.style["background-color"] = 'blue'
        keyB.style["width"] = "30px"
        keyB.style["height"] = "30px"
        leftPlate.style.transform = "rotate(0deg)";
    }
    if(e.code=='KeyC'){
        var audio = new Audio('./audio/plate (2).wav')
        audio.play();
        keyC.style["background-color"] = 'blue'
        keyC.style["width"] = "30px"
        keyC.style["height"] = "30px"
        rightPlate.style.transform = "rotate(0deg)";
    }
    if(e.code=='KeyD'){
        var audio = new Audio('./audio/plate (3).wav')
        audio.play();
        keyD.style["background-color"] = 'blue'
        keyD.style["width"] = "30px"
        keyD.style["height"] = "30px"
        rightPlate.style.transform = "translateY(0px)";
    }
    if(e.code=='KeyE'){
        var audio = new Audio('./audio/drum (1).wav')
        audio.play();
        keyE.style["background-color"] = 'blue'
        keyE.style["width"] = "30px"
        keyE.style["height"] = "30px"
        drumLine1.style.transform = "translateY(0px)";
        drumLine2.style.transform = "translateY(0px)";
        drumLine3.style.transform = "translateY(0px)";
        drumLine4.style.transform = "translateY(0px)";
    }
    if(e.code=='KeyF'){
        var audio = new Audio('./audio/drum (2).wav')
        audio.play();
        keyF.style["background-color"] = 'blue'
        keyF.style["width"] = "30px"
        keyF.style["height"] = "30px"
        drumLine1.style.transform = "translateY(0px)";
        drumLine2.style.transform = "translateY(0px)";
        drumLine3.style.transform = "translateY(0px)";
        drumLine4.style.transform = "translateY(0px)";
    }

}