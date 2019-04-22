class CarInfo{
    constructor(name='no name', fuelTrunk=0, currentFuel=0, seatCount=0, passangerCount=0){
        this.name=name
        this.fuelTrunk=fuelTrunk
        this.currentFuel=currentFuel
        this.seatCount=seatCount
        this.passangerCount=passangerCount
    }
     putFuel(value){
         if(this.currentFuel+value>this.fuelTrunk)
            throw new Error("The fuel trunk is full")
        this.currentFuel+=value
     }
     loadPassangers(value){
         if(value<this.seatCount||value>this.seatCount)
            throw new Error("Error")
        this.passangerCount+=value
     }
     unloadPassangers(value){
        if(value-this.passangerCount<0)
            throw new Error("Error")
        this.passangerCount-=value
     }
     toString(){
         return `${this.name} has ${this.fuelTrunk} l. trunk. Total seats ${this.seatCount}. Current fuel ${this.currentFuel}. There is ${this.passangerCount}`
     }
}
let infoCar = new CarInfo('Opel',45,10,5,0)
document.write(infoCar)
document.write('<br>')
infoCar.putFuel(10)
document.write(infoCar)
document.write('<br>')
// infoCar.loadPassangers(4)
// document.write(infoCar)
// document.write('<br>')
// infoCar.outPassangers(2)
// document.write(infoCar)
// document.write('<br>')
try {
infoCar.addPassangers(8)
document.write(infoCar)
document.write('<br>')
} catch (error) {
    document.write("Is this Asia's taxi?")
}
