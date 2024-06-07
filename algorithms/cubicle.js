export default class cubicle {
    constructor(id) {
        this.Id = id;
        this.col = id.charAt(1);
        this.preX = document.getElementById(id).style.left;
        this.currX = document.getElementById(id).style.left;
        this.preY = document.getElementById(id).style.top;
        this.currY = document.getElementById(id).style.top;
    }

    updateElement(id) {
        this.Id = id;
        this.col = id.charAt(1);
        this.preX = this.currX;
        this.preY = this.currY;
        document.getElementById(id).style.left = this.currX;
        document.getElementById(id).style.top = this.currY;
    }
    

    shiftRight() {

        this.currX = (parseInt(this.currX) + (310))%1240 + "px";
        document.getElementById(this.Id).style.left = this.currX

    }

}