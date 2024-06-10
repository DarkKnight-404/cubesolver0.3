import RealCubeCol from "./RealCubeCol.js";

// mobile changes 
if (navigator.userAgent.match(/Mobile/)) {
    console.log("in mobile");
    let arr = document.getElementsByClassName("colours");
    for(let i=0;i<arr.length;i++){
        arr[i].style.width = "50px";
        arr[i].style.height = "50px";
    }
}
else{
    console.log("in desktop");
}

setMySudoCube();
let realCube = new RealCubeCol();


// POSITIONA WITH ID SETTING FUNCTION ALSO GIVES COLOR TO CUBICLE FUNCTION
function setPos(x, y, id) {
    let color = "red";
    if (id.charAt(1) == "3") {
        color = "blue";
    }
    switch (id.charAt(1)) {
        case "0":
            color = "red";
            break;
        case "1":
            color = "green";
            break;
        case "2":
            color = "orange";
            break;
        case "3":
            color = "blue";
            break;
        case "4":
            color = "yellow";
            break;
        case "5":
            color = "white";
            break;
    }
    document.getElementById(id).style.backgroundColor = color;
    document.getElementById(id).style.top = y + "px";
    document.getElementById(id).style.left = x + "px";
}
// rEAL (IDEX )CUBE INITIALISING METHOD TAKES IN THE ID AND SET THE VALUE WITH COLOR
function setMyCube() {
    let redX = 0;
    let redY = 0;
    setPos(320 + redX, 350 + redY, '_00');
    setPos(420 + redX, 350 + redY, '_01');
    setPos(520 + redX, 350 + redY, '_02');
    setPos(320 + redX, 450 + redY, '_03');
    setPos(420 + redX, 450 + redY, '_04');
    setPos(520 + redX, 450 + redY, '_05');
    setPos(320 + redX, 550 + redY, '_06');
    setPos(420 + redX, 550 + redY, '_07');
    setPos(520 + redX, 550 + redY, '_08');

    let greenX = 310;
    let greenY = 0;
    setPos(320 + greenX, 350 + greenY, '_10');
    setPos(420 + greenX, 350 + greenY, '_11');
    setPos(520 + greenX, 350 + greenY, '_12');
    setPos(320 + greenX, 450 + greenY, '_13');
    setPos(420 + greenX, 450 + greenY, '_14');
    setPos(520 + greenX, 450 + greenY, '_15');
    setPos(320 + greenX, 550 + greenY, '_16');
    setPos(420 + greenX, 550 + greenY, '_17');
    setPos(520 + greenX, 550 + greenY, '_18');

    let orangeX = 620;
    let orangeY = 0;
    setPos(320 + orangeX, 350 + orangeY, '_20');
    setPos(420 + orangeX, 350 + orangeY, '_21');
    setPos(520 + orangeX, 350 + orangeY, '_22');
    setPos(320 + orangeX, 450 + orangeY, '_23');
    setPos(420 + orangeX, 450 + orangeY, '_24');
    setPos(520 + orangeX, 450 + orangeY, '_25');
    setPos(320 + orangeX, 550 + orangeY, '_26');
    setPos(420 + orangeX, 550 + orangeY, '_27');
    setPos(520 + orangeX, 550 + orangeY, '_28');

    let blueX = -310;
    let blueY = 0;
    setPos(320 + blueX, 350 + blueY, '_30');
    setPos(420 + blueX, 350 + blueY, '_31');
    setPos(520 + blueX, 350 + blueY, '_32');
    setPos(320 + blueX, 450 + blueY, '_33');
    setPos(420 + blueX, 450 + blueY, '_34');
    setPos(520 + blueX, 450 + blueY, '_35');
    setPos(320 + blueX, 550 + blueY, '_36');
    setPos(420 + blueX, 550 + blueY, '_37');
    setPos(520 + blueX, 550 + blueY, '_38');

    let yellowX = 0;
    let yellowY = -310;
    setPos(320 + yellowX, 350 + yellowY, '_40');
    setPos(420 + yellowX, 350 + yellowY, '_41');
    setPos(520 + yellowX, 350 + yellowY, '_42');
    setPos(320 + yellowX, 450 + yellowY, '_43');
    setPos(420 + yellowX, 450 + yellowY, '_44');
    setPos(520 + yellowX, 450 + yellowY, '_45');
    setPos(320 + yellowX, 550 + yellowY, '_46');
    setPos(420 + yellowX, 550 + yellowY, '_47');
    setPos(520 + yellowX, 550 + yellowY, '_48');

    let whiteX = 0;
    let whiteY = 310;
    setPos(320 + whiteX, 350 + whiteY, '_50');
    setPos(420 + whiteX, 350 + whiteY, '_51');
    setPos(520 + whiteX, 350 + whiteY, '_52');
    setPos(320 + whiteX, 450 + whiteY, '_53');
    setPos(420 + whiteX, 450 + whiteY, '_54');
    setPos(520 + whiteX, 450 + whiteY, '_55');
    setPos(320 + whiteX, 550 + whiteY, '_56');
    setPos(420 + whiteX, 550 + whiteY, '_57');
    setPos(520 + whiteX, 550 + whiteY, '_58');


}
// SUDO CUBE PRESENT AT THE MAIN METHOD SETTER
function setMySudoCube() {
    let redX = 0;
    let redY = 0;
    setPos(320 + redX, 350 + redY, '_00s');
    setPos(420 + redX, 350 + redY, '_01s');
    setPos(520 + redX, 350 + redY, '_02s');
    setPos(320 + redX, 450 + redY, '_03s');
    setPos(420 + redX, 450 + redY, '_04s');
    setPos(520 + redX, 450 + redY, '_05s');
    setPos(320 + redX, 550 + redY, '_06s');
    setPos(420 + redX, 550 + redY, '_07s');
    setPos(520 + redX, 550 + redY, '_08s');

    let greenX = 310;
    let greenY = 0;
    setPos(320 + greenX, 350 + greenY, '_10s');
    setPos(420 + greenX, 350 + greenY, '_11s');
    setPos(520 + greenX, 350 + greenY, '_12s');
    setPos(320 + greenX, 450 + greenY, '_13s');
    setPos(420 + greenX, 450 + greenY, '_14s');
    setPos(520 + greenX, 450 + greenY, '_15s');
    setPos(320 + greenX, 550 + greenY, '_16s');
    setPos(420 + greenX, 550 + greenY, '_17s');
    setPos(520 + greenX, 550 + greenY, '_18s');

    let orangeX = 620;
    let orangeY = 0;
    setPos(320 + orangeX, 350 + orangeY, '_20s');
    setPos(420 + orangeX, 350 + orangeY, '_21s');
    setPos(520 + orangeX, 350 + orangeY, '_22s');
    setPos(320 + orangeX, 450 + orangeY, '_23s');
    setPos(420 + orangeX, 450 + orangeY, '_24s');
    setPos(520 + orangeX, 450 + orangeY, '_25s');
    setPos(320 + orangeX, 550 + orangeY, '_26s');
    setPos(420 + orangeX, 550 + orangeY, '_27s');
    setPos(520 + orangeX, 550 + orangeY, '_28s');

    let blueX = -310;
    let blueY = 0;
    setPos(320 + blueX, 350 + blueY, '_30s');
    setPos(420 + blueX, 350 + blueY, '_31s');
    setPos(520 + blueX, 350 + blueY, '_32s');
    setPos(320 + blueX, 450 + blueY, '_33s');
    setPos(420 + blueX, 450 + blueY, '_34s');
    setPos(520 + blueX, 450 + blueY, '_35s');
    setPos(320 + blueX, 550 + blueY, '_36s');
    setPos(420 + blueX, 550 + blueY, '_37s');
    setPos(520 + blueX, 550 + blueY, '_38s');

    let yellowX = 0;
    let yellowY = -310;
    setPos(320 + yellowX, 350 + yellowY, '_40s');
    setPos(420 + yellowX, 350 + yellowY, '_41s');
    setPos(520 + yellowX, 350 + yellowY, '_42s');
    setPos(320 + yellowX, 450 + yellowY, '_43s');
    setPos(420 + yellowX, 450 + yellowY, '_44s');
    setPos(520 + yellowX, 450 + yellowY, '_45s');
    setPos(320 + yellowX, 550 + yellowY, '_46s');
    setPos(420 + yellowX, 550 + yellowY, '_47s');
    setPos(520 + yellowX, 550 + yellowY, '_48s');

    let whiteX = 0;
    let whiteY = 310;
    setPos(320 + whiteX, 350 + whiteY, '_50s');
    setPos(420 + whiteX, 350 + whiteY, '_51s');
    setPos(520 + whiteX, 350 + whiteY, '_52s');
    setPos(320 + whiteX, 450 + whiteY, '_53s');
    setPos(420 + whiteX, 450 + whiteY, '_54s');
    setPos(520 + whiteX, 450 + whiteY, '_55s');
    setPos(320 + whiteX, 550 + whiteY, '_56s');
    setPos(420 + whiteX, 550 + whiteY, '_57s');
    setPos(520 + whiteX, 550 + whiteY, '_58s');
}


// DRAWING FUNCTIONS
let cursorRect;
// MAKE A SMALL RECT TO RENDER WITH CURSOR
function grabCol(col) {

    try {

        document.getElementById("cursorRect").remove();

    } catch (error) {

    }

    cursorRect = document.createElement("div");
    cursorRect.id = "cursorRect";
    cursorRect.style.backgroundColor = col;
    cursorRect.style.position = "fixed";
    cursorRect.style.width = "10px";
    cursorRect.style.height = "10px";
    cursorRect.style.top = "-10px";
    document.body.appendChild(cursorRect);


    document.addEventListener("mousemove", event => {

        cursorRect.style.left = (event.x - 13) + "px";
        cursorRect.style.top = (event.y - 13) + "px";

    })
    



}
// GIVES VALUE TO THE CUBILCLE
function setColor(id) {
    try {
        document.getElementById(id).style.backgroundColor = cursorRect.style.backgroundColor;
        realCube.updateLiveColorArr();
    } catch (error) {
        alert("Select the color " + error);
    }
}

// METHOD WHICH RETURN THE ARRAY THAT WILL 
// REPRESNT THE GENERATED IDS IN THE
// POSITION ARRAYS BY COMPARING THE livecolorarray with 
// the idealcolorarray 
function getIdFromColorComb(colArr) {

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 9; j++) {

            let ind = 0;
            let checker = 0;
            if (realCube.idealColorArr[i][j].length == colArr.length) {
                for (let ind = 0; ind < colArr.length; ind++) {

                    try {
                        if (realCube.idealColorArr[i][j][ind] == colArr[ind]) {
                            checker++;
                        }
                    } catch (error) {

                    }

                }

                if (checker == colArr.length) {
                    return ("_" + i + "" + j);
                }


            }


        }
    }
    return "_..";

}
function getLiveArray() {
    let curArr = Array(6);

    for (let i = 0; i < 6; i++) {
        let sudoArray = Array(9);
        for (let j = 0; j < 9; j++) {
            if (realCube.liveColorArr[i][j].length == 1) {
                sudoArray[j] = (getIdFromColorComb([realCube.liveColorArr[i][j][0]]));
            }
            else if (realCube.liveColorArr[i][j].length == 2) {
                sudoArray[j] = (getIdFromColorComb([realCube.liveColorArr[i][j][0], realCube.liveColorArr[i][j][1]]));
            }
            else if (realCube.liveColorArr[i][j].length == 3) {
                sudoArray[j] = (getIdFromColorComb([realCube.liveColorArr[i][j][0], realCube.liveColorArr[i][j][1], realCube.liveColorArr[i][j][2]]));
            }
        }
        curArr[i] = sudoArray;
    }

    return curArr;
}



function liveArrSimulator() {
    RealCubeCol.staticBoard = getLiveArray();
    localStorage.setItem('colorArray', JSON.stringify(RealCubeCol.staticBoard))
    console.log(RealCubeCol.staticBoard);
    console.log(getLiveArray());
}








window.grabCol = grabCol;
window.setColor = setColor;
// for test
window.liveArrSimulator = liveArrSimulator;
