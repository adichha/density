class Device {
    constructor(deviceID, xCoordinate, yCoordinate, time){
        this.deviceID = deviceID;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.time = time;
        // this.elapsedTime = Date.now() - time;
    }
}
module.exports = Device;