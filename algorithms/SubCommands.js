export default class SubCommands{

    
    constructor(command){
        this.currentComm = command;
        this.head = this;
        this.tail = this;
        this.nextComm;
    }

    appendComm(command){
        let sudoComm = new SubCommands(command);
        let indexComm = this;
        while(indexComm.nextComm!=undefined){
            indexComm = indexComm.nextComm;
        }
        indexComm.nextComm = sudoComm;
        this.tail = sudoComm;
    }



}