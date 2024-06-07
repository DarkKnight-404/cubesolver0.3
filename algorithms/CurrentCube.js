import cubicle from "./cubicle.js"
export default class CurrentCube {
    constructor() {

        this.commandsHistory = "";
        this.currentId = "_0"
        this.rightId = "_1"
        this.leftId = "_3"
        this.backId = "_2"
        this.upId = "_4"
        this.downId = "_5"
        this.currentX = 0;
        this.currentY = 0;
        this.emptyX = 0;
        this.emptyY = 0;

        this.board = [
            ["_00", "_01", "_02", "_03", "_04", "_05", "_06", "_07", "_08"],
            ["_10", "_11", "_12", "_13", "_14", "_15", "_16", "_17", "_18"],
            ["_20", "_21", "_22", "_23", "_24", "_25", "_26", "_27", "_28"],
            ["_30", "_31", "_32", "_33", "_34", "_35", "_36", "_37", "_38"],
            ["_40", "_41", "_42", "_43", "_44", "_45", "_46", "_47", "_48"],
            ["_50", "_51", "_52", "_53", "_54", "_55", "_56", "_57", "_58"]
        ]
        this.sudoBoard = [
            ["_00", "_01", "_02", "_03", "_04", "_05", "_06", "_07", "_08"],
            ["_10", "_11", "_12", "_13", "_14", "_15", "_16", "_17", "_18"],
            ["_20", "_21", "_22", "_23", "_24", "_25", "_26", "_27", "_28"],
            ["_30", "_31", "_32", "_33", "_34", "_35", "_36", "_37", "_38"],
            ["_40", "_41", "_42", "_43", "_44", "_45", "_46", "_47", "_48"],
            ["_50", "_51", "_52", "_53", "_54", "_55", "_56", "_57", "_58"]
        ]


        this.boardArr = [];
        this.sudoBoardArr = [];
        for (let i = 0; i < 6; i++) {
            let sudoArr = new Array(9);
            let sudoArr2 = new Array(9);
            for (let j = 0; j < 9; j++) {
                sudoArr[j] = new cubicle(this.board[i][j]);
                sudoArr2[j] = new cubicle(this.board[i][j]);
            }
            this.boardArr.push(sudoArr);
            this.sudoBoardArr.push(sudoArr2);
        }
    }
    updateBoardArr() {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 9; j++) {
                this.boardArr[i][j].updateElement(this.sudoBoardArr[i][j].Id);
            }
        }
    }

    update(id1, x, y) {
        let x1 = parseInt(id1.charAt(1));
        let y1 = parseInt(id1.charAt(2));
        let currId = this.boardArr[x1][y1].Id;
        this.sudoBoardArr[x][y].updateElement(currId);
        console.log(`movin the ${x1} and ${y1} at ${x} and ${y}`);
    }



    getCubicle(str) {
        for (let i = 0; i < 9; i++) {
            for (letj = 0; j < 9; j++) {
                if (this.boardArr[i][j] == str) {
                    return class coordinate {
                        col = i;
                        pos = j;
                    };
                }
            }
        }
    }
    // moving indicates that only the main face will be updated
    // while rotating indicates that the entire cube will be updated



    // upper rotating clockwise method
    #upperMoveClock() {
        this.update(this.upId + 0, parseInt(this.upId.charAt(1)), 2)
        this.update(this.upId + 2, parseInt(this.upId.charAt(1)), 8)
        this.update(this.upId + 8, parseInt(this.upId.charAt(1)), 6)
        this.update(this.upId + 6, parseInt(this.upId.charAt(1)), 0)

        this.update(this.upId + 1, parseInt(this.upId.charAt(1)), 5);
        this.update(this.upId + 5, parseInt(this.upId.charAt(1)), 7);
        this.update(this.upId + 7, parseInt(this.upId.charAt(1)), 3);
        this.update(this.upId + 3, parseInt(this.upId.charAt(1)), 1);

    }
    upperRotateClock() {
        this.#upperMoveClock();


        // moving other cublets
        this.update(this.currentId + 0, parseInt(this.leftId.charAt(1)), 0)
        this.update(this.currentId + 1, parseInt(this.leftId.charAt(1)), 1)
        this.update(this.currentId + 2, parseInt(this.leftId.charAt(1)), 2)

        this.update(this.leftId + 0, parseInt(this.backId.charAt(1)), 0)
        this.update(this.leftId + 1, parseInt(this.backId.charAt(1)), 1)
        this.update(this.leftId + 2, parseInt(this.backId.charAt(1)), 2)

        this.update(this.backId + 0, parseInt(this.rightId.charAt(1)), 0)
        this.update(this.backId + 1, parseInt(this.rightId.charAt(1)), 1)
        this.update(this.backId + 2, parseInt(this.rightId.charAt(1)), 2)

        this.update(this.rightId + 0, parseInt(this.currentId.charAt(1)), 0)
        this.update(this.rightId + 1, parseInt(this.currentId.charAt(1)), 1)
        this.update(this.rightId + 2, parseInt(this.currentId.charAt(1)), 2)

        this.updateBoardArr();
        this.commandsHistory+="UC ";
    }


    // upper rotating alticlockwise method
    #upperMoveAnticlock() {

        this.update(this.upId + 0, parseInt(this.upId.charAt(1)), 6)
        this.update(this.upId + 6, parseInt(this.upId.charAt(1)), 8)
        this.update(this.upId + 8, parseInt(this.upId.charAt(1)), 2)
        this.update(this.upId + 2, parseInt(this.upId.charAt(1)), 0)

        this.update(this.upId + 1, parseInt(this.upId.charAt(1)), 3)
        this.update(this.upId + 3, parseInt(this.upId.charAt(1)), 7)
        this.update(this.upId + 7, parseInt(this.upId.charAt(1)), 5)
        this.update(this.upId + 5, parseInt(this.upId.charAt(1)), 1)

    }
    upperRotateAnticlock() {
        this.#upperMoveAnticlock();


        // moving other cublets
        this.update(this.currentId + 0, parseInt(this.rightId.charAt(1)), 0)
        this.update(this.currentId + 1, parseInt(this.rightId.charAt(1)), 1)
        this.update(this.currentId + 2, parseInt(this.rightId.charAt(1)), 2)

        this.update(this.rightId + 0, parseInt(this.backId.charAt(1)), 0)
        this.update(this.rightId + 1, parseInt(this.backId.charAt(1)), 1)
        this.update(this.rightId + 2, parseInt(this.backId.charAt(1)), 2)

        this.update(this.backId + 0, parseInt(this.leftId.charAt(1)), 0)
        this.update(this.backId + 1, parseInt(this.leftId.charAt(1)), 1)
        this.update(this.backId + 2, parseInt(this.leftId.charAt(1)), 2)

        this.update(this.leftId + 0, parseInt(this.currentId.charAt(1)), 0)
        this.update(this.leftId + 1, parseInt(this.currentId.charAt(1)), 1)
        this.update(this.leftId + 2, parseInt(this.currentId.charAt(1)), 2)

        this.updateBoardArr();
        this.commandsHistory+="UA ";
    }


    // down rotating clockwise
    #downMoveClock() {
        this.update(this.downId + 0, parseInt(this.downId.charAt(1)), 2)
        this.update(this.downId + 2, parseInt(this.downId.charAt(1)), 8)
        this.update(this.downId + 8, parseInt(this.downId.charAt(1)), 6)
        this.update(this.downId + 6, parseInt(this.downId.charAt(1)), 0)

        this.update(this.downId + 1, parseInt(this.downId.charAt(1)), 5);
        this.update(this.downId + 5, parseInt(this.downId.charAt(1)), 7);
        this.update(this.downId + 7, parseInt(this.downId.charAt(1)), 3);
        this.update(this.downId + 3, parseInt(this.downId.charAt(1)), 1);
    }
    downRotateClock() {
        this.#downMoveClock();

        this.update(this.currentId + 6, parseInt(this.rightId.charAt(1)), 6)
        this.update(this.currentId + 7, parseInt(this.rightId.charAt(1)), 7)
        this.update(this.currentId + 8, parseInt(this.rightId.charAt(1)), 8)

        this.update(this.rightId + 6, parseInt(this.backId.charAt(1)), 6)
        this.update(this.rightId + 7, parseInt(this.backId.charAt(1)), 7)
        this.update(this.rightId + 8, parseInt(this.backId.charAt(1)), 8)

        this.update(this.backId + 6, parseInt(this.leftId.charAt(1)), 6)
        this.update(this.backId + 7, parseInt(this.leftId.charAt(1)), 7)
        this.update(this.backId + 8, parseInt(this.leftId.charAt(1)), 8)

        this.update(this.leftId + 6, parseInt(this.currentId.charAt(1)), 6)
        this.update(this.leftId + 7, parseInt(this.currentId.charAt(1)), 7)
        this.update(this.leftId + 8, parseInt(this.currentId.charAt(1)), 8)

        this.updateBoardArr();
        this.commandsHistory+="DC ";
    }


    // down rotating anticlickwise
    #downMoveAnticlock() {

        this.update(this.downId + 0, parseInt(this.downId.charAt(1)), 6)
        this.update(this.downId + 6, parseInt(this.downId.charAt(1)), 8)
        this.update(this.downId + 8, parseInt(this.downId.charAt(1)), 2)
        this.update(this.downId + 2, parseInt(this.downId.charAt(1)), 0)

        this.update(this.downId + 1, parseInt(this.downId.charAt(1)), 3)
        this.update(this.downId + 3, parseInt(this.downId.charAt(1)), 7)
        this.update(this.downId + 7, parseInt(this.downId.charAt(1)), 5)
        this.update(this.downId + 5, parseInt(this.downId.charAt(1)), 1)

    }
    downRotateAnticlock() {
        this.#downMoveAnticlock();

        // moving other cublets
        this.update(this.currentId + 6, parseInt(this.leftId.charAt(1)), 6)
        this.update(this.currentId + 7, parseInt(this.leftId.charAt(1)), 7)
        this.update(this.currentId + 8, parseInt(this.leftId.charAt(1)), 8)

        this.update(this.leftId + 6, parseInt(this.backId.charAt(1)), 6)
        this.update(this.leftId + 7, parseInt(this.backId.charAt(1)), 7)
        this.update(this.leftId + 8, parseInt(this.backId.charAt(1)), 8)

        this.update(this.backId + 6, parseInt(this.rightId.charAt(1)), 6)
        this.update(this.backId + 7, parseInt(this.rightId.charAt(1)), 7)
        this.update(this.backId + 8, parseInt(this.rightId.charAt(1)), 8)

        this.update(this.rightId + 6, parseInt(this.currentId.charAt(1)), 6)
        this.update(this.rightId + 7, parseInt(this.currentId.charAt(1)), 7)
        this.update(this.rightId + 8, parseInt(this.currentId.charAt(1)), 8)

        this.updateBoardArr();
        this.commandsHistory+="DA "
    }


    // front moving clockwise
    #frontMoveClock() {

        this.update(this.currentId + 0, parseInt(this.currentId.charAt(1)), 2)
        this.update(this.currentId + 2, parseInt(this.currentId.charAt(1)), 8)
        this.update(this.currentId + 8, parseInt(this.currentId.charAt(1)), 6)
        this.update(this.currentId + 6, parseInt(this.currentId.charAt(1)), 0)

        this.update(this.currentId + 1, parseInt(this.currentId.charAt(1)), 5);
        this.update(this.currentId + 5, parseInt(this.currentId.charAt(1)), 7);
        this.update(this.currentId + 7, parseInt(this.currentId.charAt(1)), 3);
        this.update(this.currentId + 3, parseInt(this.currentId.charAt(1)), 1);

    }
    frontRotateClock() {
        this.#frontMoveClock();


        this.update(this.rightId + 0, parseInt(this.downId.charAt(1)), 2)
        this.update(this.rightId + 3, parseInt(this.downId.charAt(1)), 1)
        this.update(this.rightId + 6, parseInt(this.downId.charAt(1)), 0)

        this.update(this.downId + 0, parseInt(this.leftId.charAt(1)), 2)
        this.update(this.downId + 1, parseInt(this.leftId.charAt(1)), 5)
        this.update(this.downId + 2, parseInt(this.leftId.charAt(1)), 8)

        this.update(this.leftId + 2, parseInt(this.upId.charAt(1)), 8)
        this.update(this.leftId + 5, parseInt(this.upId.charAt(1)), 7)
        this.update(this.leftId + 8, parseInt(this.upId.charAt(1)), 6)

        this.update(this.upId + 8, parseInt(this.rightId.charAt(1)), 6)
        this.update(this.upId + 7, parseInt(this.rightId.charAt(1)), 3)
        this.update(this.upId + 6, parseInt(this.rightId.charAt(1)), 0)

        this.updateBoardArr();
        this.commandsHistory+="FC ";
    }




    // front moving anticlockwise
    #frontMoveAnticlock() {
        this.update(this.currentId + 0, parseInt(this.currentId.charAt(1)), 6)
        this.update(this.currentId + 6, parseInt(this.currentId.charAt(1)), 8)
        this.update(this.currentId + 8, parseInt(this.currentId.charAt(1)), 2)
        this.update(this.currentId + 2, parseInt(this.currentId.charAt(1)), 0)

        this.update(this.currentId + 1, parseInt(this.currentId.charAt(1)), 3)
        this.update(this.currentId + 3, parseInt(this.currentId.charAt(1)), 7)
        this.update(this.currentId + 7, parseInt(this.currentId.charAt(1)), 5)
        this.update(this.currentId + 5, parseInt(this.currentId.charAt(1)), 1)
    }
    frontRotateAnticlock() {
        this.#frontMoveAnticlock();

        this.update(this.rightId + 0, parseInt(this.upId.charAt(1)), 6)
        this.update(this.rightId + 3, parseInt(this.upId.charAt(1)), 7)
        this.update(this.rightId + 6, parseInt(this.upId.charAt(1)), 8)

        this.update(this.upId + 8, parseInt(this.leftId.charAt(1)), 2)
        this.update(this.upId + 7, parseInt(this.leftId.charAt(1)), 5)
        this.update(this.upId + 6, parseInt(this.leftId.charAt(1)), 8)

        this.update(this.leftId + 2, parseInt(this.downId.charAt(1)), 0)
        this.update(this.leftId + 5, parseInt(this.downId.charAt(1)), 1)
        this.update(this.leftId + 8, parseInt(this.downId.charAt(1)), 2)

        this.update(this.downId + 0, parseInt(this.rightId.charAt(1)), 6)
        this.update(this.downId + 1, parseInt(this.rightId.charAt(1)), 3)
        this.update(this.downId + 2, parseInt(this.rightId.charAt(1)), 0)

        this.updateBoardArr();
        this.commandsHistory+="FA ";
    }




    // right clockwise
    #rightMoveClock() {
        this.update(this.rightId + 0, parseInt(this.rightId.charAt(1)), 2)
        this.update(this.rightId + 2, parseInt(this.rightId.charAt(1)), 8)
        this.update(this.rightId + 8, parseInt(this.rightId.charAt(1)), 6)
        this.update(this.rightId + 6, parseInt(this.rightId.charAt(1)), 0)

        this.update(this.rightId + 1, parseInt(this.rightId.charAt(1)), 5);
        this.update(this.rightId + 5, parseInt(this.rightId.charAt(1)), 7);
        this.update(this.rightId + 7, parseInt(this.rightId.charAt(1)), 3);
        this.update(this.rightId + 3, parseInt(this.rightId.charAt(1)), 1);
    }
    rightRotateClock() {
        this.#rightMoveClock();

        this.update(this.currentId + 2, parseInt(this.upId.charAt(1)), 2)
        this.update(this.currentId + 5, parseInt(this.upId.charAt(1)), 5)
        this.update(this.currentId + 8, parseInt(this.upId.charAt(1)), 8)

        this.update(this.upId + 2, parseInt(this.backId.charAt(1)), 6)
        this.update(this.upId + 5, parseInt(this.backId.charAt(1)), 3)
        this.update(this.upId + 8, parseInt(this.backId.charAt(1)), 0)

        this.update(this.backId + 6, parseInt(this.downId.charAt(1)), 2)
        this.update(this.backId + 3, parseInt(this.downId.charAt(1)), 5)
        this.update(this.backId + 0, parseInt(this.downId.charAt(1)), 8)

        this.update(this.downId + 2, parseInt(this.currentId.charAt(1)), 2)
        this.update(this.downId + 5, parseInt(this.currentId.charAt(1)), 5)
        this.update(this.downId + 8, parseInt(this.currentId.charAt(1)), 8)

        this.updateBoardArr();
        this.commandsHistory+="RC ";
    }


    // right Anticlock
    #rightMoveAnticLock() {
        this.update(this.rightId + 0, parseInt(this.rightId.charAt(1)), 6)
        this.update(this.rightId + 6, parseInt(this.rightId.charAt(1)), 8)
        this.update(this.rightId + 8, parseInt(this.rightId.charAt(1)), 2)
        this.update(this.rightId + 2, parseInt(this.rightId.charAt(1)), 0)

        this.update(this.rightId + 1, parseInt(this.rightId.charAt(1)), 3)
        this.update(this.rightId + 3, parseInt(this.rightId.charAt(1)), 7)
        this.update(this.rightId + 7, parseInt(this.rightId.charAt(1)), 5)
        this.update(this.rightId + 5, parseInt(this.rightId.charAt(1)), 1)
    }
    rightRotateAnticlock() {

        this.#rightMoveAnticLock();

        this.update(this.currentId + 2, parseInt(this.downId.charAt(1)), 2)
        this.update(this.currentId + 5, parseInt(this.downId.charAt(1)), 5)
        this.update(this.currentId + 8, parseInt(this.downId.charAt(1)), 8)

        this.update(this.downId + 2, parseInt(this.backId.charAt(1)), 6)
        this.update(this.downId + 5, parseInt(this.backId.charAt(1)), 3)
        this.update(this.downId + 8, parseInt(this.backId.charAt(1)), 0)

        this.update(this.backId + 6, parseInt(this.upId.charAt(1)), 2)
        this.update(this.backId + 3, parseInt(this.upId.charAt(1)), 5)
        this.update(this.backId + 0, parseInt(this.upId.charAt(1)), 8)

        this.update(this.upId + 2, parseInt(this.currentId.charAt(1)), 2)
        this.update(this.upId + 5, parseInt(this.currentId.charAt(1)), 5)
        this.update(this.upId + 8, parseInt(this.currentId.charAt(1)), 8)

        this.updateBoardArr();
        this.commandsHistory+="RA "


    }


    // left clockwise
    #leftMoveClock() {

        this.update(this.leftId + 0, parseInt(this.leftId.charAt(1)), 6)
        this.update(this.leftId + 6, parseInt(this.leftId.charAt(1)), 8)
        this.update(this.leftId + 8, parseInt(this.leftId.charAt(1)), 2)
        this.update(this.leftId + 2, parseInt(this.leftId.charAt(1)), 0)

        this.update(this.leftId + 1, parseInt(this.leftId.charAt(1)), 3)
        this.update(this.leftId + 3, parseInt(this.leftId.charAt(1)), 7)
        this.update(this.leftId + 7, parseInt(this.leftId.charAt(1)), 5)
        this.update(this.leftId + 5, parseInt(this.leftId.charAt(1)), 1)

    }
    leftRotateClock() {
        this.#leftMoveClock();

        this.update(this.currentId + 0, parseInt(this.upId.charAt(1)), 0)
        this.update(this.currentId + 3, parseInt(this.upId.charAt(1)), 3)
        this.update(this.currentId + 6, parseInt(this.upId.charAt(1)), 6)

        this.update(this.upId + 0, parseInt(this.backId.charAt(1)), 8)
        this.update(this.upId + 3, parseInt(this.backId.charAt(1)), 5)
        this.update(this.upId + 6, parseInt(this.backId.charAt(1)), 2)

        this.update(this.backId + 8, parseInt(this.downId.charAt(1)), 0)
        this.update(this.backId + 5, parseInt(this.downId.charAt(1)), 3)
        this.update(this.backId + 2, parseInt(this.downId.charAt(1)), 6)

        this.update(this.downId + 0, parseInt(this.currentId.charAt(1)), 0)
        this.update(this.downId + 3, parseInt(this.currentId.charAt(1)), 3)
        this.update(this.downId + 6, parseInt(this.currentId.charAt(1)), 6)

        this.updateBoardArr();
        this.commandsHistory+="LC "
    }


    // left anti clock
    #leftMoveAnticlock() {

        this.update(this.leftId + 0, parseInt(this.leftId.charAt(1)), 2)
        this.update(this.leftId + 2, parseInt(this.leftId.charAt(1)), 8)
        this.update(this.leftId + 8, parseInt(this.leftId.charAt(1)), 6)
        this.update(this.leftId + 6, parseInt(this.leftId.charAt(1)), 0)

        this.update(this.leftId + 1, parseInt(this.leftId.charAt(1)), 5);
        this.update(this.leftId + 5, parseInt(this.leftId.charAt(1)), 7);
        this.update(this.leftId + 7, parseInt(this.leftId.charAt(1)), 3);
        this.update(this.leftId + 3, parseInt(this.leftId.charAt(1)), 1);
    }
    leftRotateAnticlock() {
        this.#leftMoveAnticlock();

        this.update(this.currentId + 0, parseInt(this.downId.charAt(1)), 0)
        this.update(this.currentId + 3, parseInt(this.downId.charAt(1)), 3)
        this.update(this.currentId + 6, parseInt(this.downId.charAt(1)), 6)

        this.update(this.downId + 0, parseInt(this.backId.charAt(1)), 8)
        this.update(this.downId + 3, parseInt(this.backId.charAt(1)), 5)
        this.update(this.downId + 6, parseInt(this.backId.charAt(1)), 2)

        this.update(this.backId + 2, parseInt(this.upId.charAt(1)), 6)
        this.update(this.backId + 5, parseInt(this.upId.charAt(1)), 3)
        this.update(this.backId + 8, parseInt(this.upId.charAt(1)), 0)

        this.update(this.upId + 6, parseInt(this.currentId.charAt(1)), 6)
        this.update(this.upId + 3, parseInt(this.currentId.charAt(1)), 3)
        this.update(this.upId + 0, parseInt(this.currentId.charAt(1)), 0)

        this.updateBoardArr();
        this.commandsHistory+="LA ";

    }




    moveRight() {
        for (let j = 0; j < 9; j++) {
            this.boardArr[4][j].shiftRight();
            this.boardArr[5][j].shiftRight();
        }


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
                this.currentId = "_0"
                this.rightId = "_1"
                this.leftId = "_3"
                this.backId = "_2"
                break;


        }

        this.#upperMoveClock();
        this.#downMoveAnticlock();
        this.updateBoardArr();


    }
    moveLeft() {
        switch (this.currentId) {
            case "_0":
                this.currentId = "_3"
                this.rightId = "_0"
                this.left = "_2"
                this.backId = "_1"
                break;
            case "_1":
                this.currentId = "_2"
                this.rightId = "_3"
                this.left = "_1"
                this.backId = "_0"
                break;
            case "_2":
                this.currentId = "_1"
                this.rightId = "_2"
                this.left = "_0"
                this.backId = "_3"
                break;
            case "_3":
                this.currentId = "_0"
                this.rightId = "_1"
                this.left = "_3"
                this.backId = "_2"
                break;
        }
    }




    getStateValus(id) {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.boardArr[i][j].Id == id) {
                    let checkerId = "_" + i;
                    switch (checkerId) {
                        case this.currentId:
                            return "current";
                        case this.rightId:
                            return "right";
                        case this.leftId:
                            return "left";
                        case this.upId:
                            return "up";
                        case this.downId:
                            return "down";
                        case this.backId:
                            return "back";
                    }
                }
            }
        }
        console.log("no state found");
    }

    getOrderNo(id){
        for(let i=0;i<6;i++){
            for(let j=0;j<9;j++){
                if(this.boardArr[i][j].Id == id){
                    return j;
                }
            }
        }
    }
}