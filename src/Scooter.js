class Scooter {
    
    static nextSerial = 1;
    
    constructor(station){
        this.station = station;
        this.user = null;
        this.charge = 100;
        this.isBroken = false;
        this.serial = Scooter.nextSerial++
    }

}

module.exports = Scooter;