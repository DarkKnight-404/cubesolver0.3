import SubCommand from "./SubCommands.js";

export default class Algorithm {


    genCommList(commStr) {
        let commList = new SubCommand(commStr.substring(0, 3));
        let ind = 1;

        while (ind * 3 < (commStr.length - 1)) {
            commList.appendComm(commStr.substring(ind * 3, (ind + 1) * 3));
            ind++;
        }

        return commList;
    }



    getPlusAlgorithm(stateValue, orderNo) {

        console.log("state value : " + stateValue + " order No : " + orderNo);

        if (stateValue == "up") {
            switch (orderNo) {
                case 1:
                    return this.genCommList("uc uc fc fc");
                case 3:
                    return this.genCommList("ua fc fc");
                case 7:
                    return this.genCommList("fc fc");
                case 5:
                    return this.genCommList("uc fc fc");
            }
        }

        if (stateValue == "right") {
            switch (orderNo) {
                case 1:
                    return this.genCommList("ra fc rc");
                case 3:
                    return this.genCommList("fc");
                case 7:
                    return this.genCommList("rc fc ra");
                case 5:
                    return this.genCommList("rc rc fc ra ra");
            }
        }

        if (stateValue == "left") {
            switch (orderNo) {
                case 1:
                    return this.genCommList("la fa lc");
                case 3:
                    return this.genCommList("lc lc fa la la");
                case 7:
                    return this.genCommList("lc fa la");
                case 5:
                    return this.genCommList("fa");
            }
        }

        if (stateValue == "down") {
            switch (orderNo) {
                case 1:
                    return this.genCommList("");
                case 3:
                    return this.genCommList("dc fc da fa");
                case 7:
                    return this.genCommList("dc dc fc da da fa");
                case 5:
                    return this.genCommList("da fc dc fa");
            }
        }

        if (stateValue == "back") {
            switch (orderNo) {
                case 1:
                    return this.genCommList("uc ra fc ra");
                case 3:
                    return this.genCommList("ra uc rc fc fc");
                case 7:
                    return this.genCommList("da da fc dc dc fa");
                case 5:
                    return this.genCommList("la ua lc fc fc");
            }
        }

        if (stateValue == "current") {
            switch (orderNo) {
                case 1:
                    return this.genCommList("ua ra fc rc");
                case 3:
                    return this.genCommList("lc ua la fc fc");
                case 7:
                    return this.genCommList("fa rc uc ra fc fc");
                case 5:
                    return this.genCommList("rc uc ra fc fc");
            }
        }


    }


    getEdgeAlgorithm(stateValue, orderNo) {
        let ans = "";
        if (stateValue == "up") {
            switch (orderNo) {
                case 0:
                    ans += "uc uc ";
                    break
                case 2:
                    ans += "uc ";
                    break;
                case 6:
                    ans += "ua ";
                    break
                case 8:
                    break;
            }
            ans += "rc uc uc ra ua rc uc ra";
            return this.genCommList(ans);
        }

        else if (stateValue == "right") {
            switch (orderNo) {
                case 0:
                    ans += "rc uc ra";
                    break
                case 2:
                    ans += "uc uc rc ua ra";
                    break;
                case 6:
                    ans += "rc uc ra ua rc uc ra ua";
                    break
                case 8:
                    ans += "ra uc uc rc rc ua ra";
                    break;
            }
            return this.genCommList(ans);
        }

        else if (stateValue == "left") {
            switch (orderNo) {
                case 0:
                    ans += "ua ua rc uc ra ua";
                    break
                case 2:
                    ans += "rc ua ra";
                    break;
                case 6:
                    ans += "la uc lc uc rc uc ra ua";
                    break
                case 8:
                    ans += "rc lc ua la ra";
                    break;
            }
            return this.genCommList(ans);
        }

        else if (stateValue == "down") {
            switch (orderNo) {
                case 0:
                    ans += "lc ua la rc uc ra ua";
                    break
                case 2:
                    ans += "";
                    break;
                case 6:
                    ans += "rc la uc uc lc ra";
                    break
                case 8:
                    ans += "ra ua rc ua ua rc uc ra ua";
                    break;
            }
            return this.genCommList(ans);
        }

        else if (stateValue == "back") {
            switch (orderNo) {
                case 0:
                    ans += "uc rc uc ra ua";
                    break
                case 2:
                    ans += "rc uc uc ra";
                    break;
                case 6:
                    ans += "ra uc uc rc ua rc uc uc ra ua rc uc ra";
                    break
                case 8:
                    ans += "la rc ua ua ra lc";
                    break;
            }
            return this.genCommList(ans);
        }

        else if (stateValue == "current") {
            switch (orderNo) {
                case 0:
                    ans += "ua rc uc ra ua";
                    break
                case 2:
                    ans += "uc rc ua ra";
                    break;
                case 6:
                    ans += "lc ua la rc uc ra ua rc uc ra ua rc uc ra ua";
                    break
                case 8:
                    ans += "fa ua ua fc rc uc uc ra";
                    break;
            }
            return this.genCommList(ans);
        }


    }
}