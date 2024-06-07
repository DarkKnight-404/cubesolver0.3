export default class CubeletColor {

    constructor(cur, curClk, curClkClk) {
        try {
            this.cur = document.getElementById(cur + "0s").style.backgroundColor;
            this.curClk = document.getElementById(curClk + "0s").style.backgroundColor;
            this.curClkClk = document.getElementById(curClkClk + "0s").style.backgroundColor;

            this.col = [cur, curClk, curClkClk];
        } catch (error) {
            alert("cur : " + cur + " curclk : " + curClk + " curClkClk : " + curClkClk + " error : " + error);
        }


    }








}