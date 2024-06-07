import RealCubeCol from "../RealCubeCol.js";
import Algorithm from "./Algorithm.js";
import CurrentCube from "./CurrentCube.js";
import SubCommand from "./SubCommands.js";


// let algori = new Algorithm();
// console.log(algori.genCommList("rc uc ra ua ")); 
let scrambledCube;


let textField = document.getElementById("CommandTf");
function writeComm(str) {
    textField.innerText = str;
}

function setPos(x, y, id) {
    let color = "red";
    console.log(id.charAt(1));
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


setMyCube();
setMyCube();


let cb = new CurrentCube();
let alg = new Algorithm();

// cb.moveRight();

let liveSteps2 = 0;

let liveSteps = 0;
let ticker = 0;
let isAlgFound = false;
let currentAlg = "";



function update() {
    cb.upperRotateClock();
}

function operateCommand() {
    console.log(document.getElementById("cubeCommand").innerText);
}







function commandsWriter(command) {
    if (command == "uc" || command == "UC") {
        cb.upperRotateClock();
    }

    else if (command == "ua" || command == "UA") {
        cb.upperRotateAnticlock();
    }

    else if (command == "dc" || command == "DC") {
        cb.downRotateClock();
    }

    else if (command == "da" || command == "DA") {
        cb.downRotateAnticlock();
    }

    else if (command == "fc" || command == "FC") {
        cb.frontRotateClock();
    }

    else if (command == "fa" || command == "FA") {
        cb.frontRotateAnticlock();
    }

    else if (command == "rc" || command == "RC") {
        cb.rightRotateClock();
    }

    else if (command == "ra" || command == "RA") {
        cb.rightRotateAnticlock();
    }

    else if (command == "lc" || command == "LC") {
        cb.leftRotateClock();
    }

    else if (command == "la" || command == "LA") {
        cb.leftRotateAnticlock();
    }


    else if (command == "moveRight" || command == "mr" || command == "MR") {
        cb.moveRight();
    }
    else if (command == "moveLeft") {
        cb.moveLeft();
    }

}

function commandController() {
    let ans = "";

    if (liveSteps == 0) {
        if (!isAlgFound) {
            currentAlg = alg.getPlusAlgorithm(cb.getStateValus("_51"), cb.getOrderNo("_51"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }

    }
    else if (liveSteps == 1) {
        if (!isAlgFound) {
            currentAlg = alg.getPlusAlgorithm(cb.getStateValus("_55"), cb.getOrderNo("_55"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }
    }
    else if (liveSteps == 2) {
        if (!isAlgFound) {
            currentAlg = alg.getPlusAlgorithm(cb.getStateValus("_57"), cb.getOrderNo("_57"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }
    }
    else if (liveSteps == 3) {
        if (!isAlgFound) {
            currentAlg = alg.getPlusAlgorithm(cb.getStateValus("_53"), cb.getOrderNo("_53"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }
    }


    else if (liveSteps == 4) {
        if (!isAlgFound) {
            currentAlg = alg.getEdgeAlgorithm(cb.getStateValus("_52"), cb.getOrderNo("_52"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }
    }
    else if (liveSteps == 5) {
        if (!isAlgFound) {
            currentAlg = alg.getEdgeAlgorithm(cb.getStateValus("_58"), cb.getOrderNo("_58"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }
    }
    else if (liveSteps == 6) {
        if (!isAlgFound) {
            currentAlg = alg.getEdgeAlgorithm(cb.getStateValus("_56"), cb.getOrderNo("_56"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }
    }
    else if (liveSteps == 7) {
        if (!isAlgFound) {
            currentAlg = alg.getEdgeAlgorithm(cb.getStateValus("_50"), cb.getOrderNo("_50"));
            console.log(currentAlg);
            isAlgFound = true;
        }
        if (currentAlg == undefined) {
            liveSteps++;
            console.log("Step : MoveRight");
            writeComm("mr");
            ans = "mr";
            isAlgFound = false;
        } else {
            console.log("Step : " + currentAlg.currentComm);
            writeComm(currentAlg.currentComm);
            ans = currentAlg.currentComm;
            currentAlg = currentAlg.nextComm;
        }
    }
    // liveSteps++;

    return ans.substring(0, 2);
}

function autoCommOperator() {
    commandsWriter(commandController());
}







document.getElementById("cubeCommand").addEventListener("keydown", function (event) {
    if (event.code == "KeyP") {
        console.log(event.target.value);
        console.log(cb.getStateValus(event.target.value) + " " + cb.getOrderNo(event.target.value));
        event.target.value = "";
    }
    if (event.code == "Enter") {
        let command = (document.getElementById("cubeCommand").value);

        commandsWriter(command);



        // the function is not working because it vreates algorithm continously for every itteration here isAlgFound is used to manage it 
        if (command == "alg") {
            commandController();
        }


        // if (command == "alg2") {
        //     if (liveSteps2 == 0) {
        //         console.log(alg.getPlusAlgorithm(cb.getStateValus("_51"), cb.getOrderNo("_51")));
        //         console.log("moveRight")
        //     }
        //     else if (liveSteps2 == 1) {
        //         console.log(alg.getPlusAlgorithm(cb.getStateValus("_55"), cb.getOrderNo("_55")));
        //         console.log("moveRight")
        //     }
        //     else if (liveSteps2 == 2) {
        //         console.log(alg.getPlusAlgorithm(cb.getStateValus("_57"), cb.getOrderNo("_57")));
        //         console.log("moveRight")
        //     }
        //     else if (liveSteps2 == 3) {
        //         console.log(alg.getPlusAlgorithm(cb.getStateValus("_53"), cb.getOrderNo("_53")));
        //         console.log("moveRight")
        //     }
        //     liveSteps2++;
        // }













        event.target.value = "";


    }
})


document.addEventListener("DOMContentLoaded", () => {
    console.log("printing array");
    scrambledCube = JSON.parse(localStorage.getItem("colorArray"));
    // cb.board = scrambledCube;
    // cb.sudoBoard = scrambledCube;
    console.log(scrambledCube);


    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 9; j++) {
            console.log(scrambledCube[i][j]+`element at ${i}  ${j}`);
            cb.update(scrambledCube[i][j], i, j);
        }
    }
    cb.updateBoardArr();
    console.log(cb.board);

})

window.update = update;
window.operateCommand = operateCommand;
window.autoCommOperator = autoCommOperator;