import CubeletColor from "./CubletColor.js"

export default class RealCubeCol {

    static staticBoard;
    static{
        console.log("static in the real cube col");
    }
    moveRight() {
        switch (this.currentId) {

            case "_0":
                this.currentId = "_1"
                this.rightId = "_2"
                this.leftId = "_0"
                this.backId = "_3"
                break;
            case "_1":
                this.currentId = "_2"
                this.rightId = "_3"
                this.leftId = "_1"
                this.backId = "_0"
                break;
            case "_2":
                this.currentId = "_3"
                this.rightId = "_0"
                this.leftId = "_2"
                this.backId = "_1"
                break;
            case "_3":
                this.currentId = "_4"
                this.rightId = "_0"
                this.leftId = "_2"
                this.backId = "_5"
                this.upId = "_1"
                this.downId = "_3"
                break;
            case "_4":
                this.currentId = "_5"
                this.rightId = "_0"
                this.leftId = "_2"
                this.upId = "_1"
                this.downId = "_3"
                this.backId = "_4"
                break;
            case "_5":
                this.currentId = "_0"
                this.leftId = "_3"
                this.rightId = "_1"
                this.upId = "_4"
                this.downId = "_5"
                this.backId = "_2"
                break;


        }
    }



    constructor() {


        this.currentId = "_0"
        this.rightId = "_1"
        this.leftId = "_3"
        this.backId = "_2"
        this.upId = "_4"
        this.downId = "_5"


        this.boardBluePrint = [
            [["_00", "_32", "_46"], ["_01", "_47"], ["_02", "_48", "_10"], ["_03", "_35"], ["_04"], ["_05", "_13"], ["_06", "_50", "_38"], ["_07", "_51"], ["_08", "_16", "_52"]],
            [["_10", "_02", "_48"], ["_11", "_45"], ["_12", "_42", "_20"], ["_13", "_05"], ["_14"], ["_15", "_23"], ["_16", "_52", "_08"], ["_17", "_55"], ["_18", "_26", "_58"]],
            [["_20", "_12", "_42"], ["_21", "_41"], ["_22", "_40", "_30"], ["_23", "_15"], ["_24"], ["_25", "_33"], ["_26", "_58", "_18"], ["_27", "_57"], ["_28", "_36", "_56"]],
            [["_30", "_22", "_40"], ["_31", "_43"], ["_32", "_46", "_00"], ["_33", "_25"], ["_34"], ["_35", "_03"], ["_36", "_56", "_28"], ["_37", "_53"], ["_38", "_06", "_50"]],
            [["_40", "_30", "_22"], ["_41", "_21"], ["_42", "_20", "_12"], ["_43", "_31"], ["_44"], ["_45", "_11"], ["_46", "_00", "_32"], ["_47", "_01"], ["_48", "_10", "_02"]],
            [["_50", "_38", "_06"], ["_51", "_07"], ["_52", "_08", "_16"], ["_53", "_37"], ["_54"], ["_55", "_17"], ["_56", "_28", "_36"], ["_57", "_27"], ["_58", "_18", "_26"]]
        ]




        this.idealColorArr = new Array(6);
        this.liveColorArr = new Array(6);



        this.board = [
            ["_00", "_01", "_02", "_03", "_04", "_05", "_06", "_07", "_08"],
            ["_10", "_11", "_12", "_13", "_14", "_15", "_16", "_17", "_18"],
            ["_20", "_21", "_22", "_23", "_24", "_25", "_26", "_27", "_28"],
            ["_30", "_31", "_32", "_33", "_34", "_35", "_36", "_37", "_38"],
            ["_40", "_41", "_42", "_43", "_44", "_45", "_46", "_47", "_48"],
            ["_50", "_51", "_52", "_53", "_54", "_55", "_56", "_57", "_58"]
        ]


        console.log("__________________________________________________logging_ideal_and_live_colors_array__________________________________________________")
        for (let i = 0; i < 6; i++) {
            let sudoColArr = new Array(9);
            let sudoColArr2 = new Array(9);

            for (let j = 0; j < 9; j++) {
                try {
                    if (this.boardBluePrint[i][j].length == 3) {
                        sudoColArr[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][1] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][2] + "s").style.backgroundColor]
                        sudoColArr2[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][1] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][2] + "s").style.backgroundColor]
                    }
                    if (this.boardBluePrint[i][j].length == 2) {
                        sudoColArr[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][1] + "s").style.backgroundColor]
                        sudoColArr2[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][1] + "s").style.backgroundColor]
                    }
                    if (this.boardBluePrint[i][j].length == 1) {
                        sudoColArr[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor];
                        sudoColArr2[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor];
                    }
                    console.log(`                                          ideal color array reading cubicle colours at ` + i + " " + j + " is ");
                } catch (error) {
                    console.log("                                          (problem in reading this error : " + error)
                    console.log(this.boardBluePrint[i][j]);
                    console.log(document.getElementById(this.boardBluePrint[i][j][0] + "s"));
                }

            }


            this.idealColorArr[i] = sudoColArr;
            this.liveColorArr[i] = sudoColArr2;

        }
        console.log("........\n");
        console.log("ideal color array initialised ");
        console.log(this.idealColorArr);
        console.log("live color array initialised ");
        console.log(this.idealColorArr);
        console.log("............................................................................................................................................\n");

    }

    updateLiveColorArr() {

        console.log();
        console.log("updating............................................................................................................................................")

        for (let i = 0; i < 6; i++) {
            let sudoColArr = new Array(9);
            let sudoColArr2 = new Array(9);

            for (let j = 0; j < 9; j++) {
                try {
                    if (this.boardBluePrint[i][j].length == 3) {
                        sudoColArr2[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][1] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][2] + "s").style.backgroundColor]
                    }
                    if (this.boardBluePrint[i][j].length == 2) {
                        sudoColArr2[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor, document.getElementById(this.boardBluePrint[i][j][1] + "s").style.backgroundColor]
                    }
                    if (this.boardBluePrint[i][j].length == 1) {
                        sudoColArr2[j] = [document.getElementById(this.boardBluePrint[i][j][0] + "s").style.backgroundColor];
                    }
                    console.log(`               live color array at ` + i + " " + j + " is ");
                } catch (error) {
                    console.log("               problem in reading this " + error)
                    console.log(this.boardBluePrint[i][j]);
                    console.log(document.getElementById(this.boardBluePrint[i][j][0] + "s"));
                }



            }


            this.liveColorArr[i] = sudoColArr2;

        }

        console.log("update successful ----")
        console.log("updated live color array");
        console.log(this.liveColorArr);
        console.log("............................................................................................................................................\n");

    }

}