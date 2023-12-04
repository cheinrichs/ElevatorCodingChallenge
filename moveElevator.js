const SINGLE_FLOOR_TRAVEL_TIME = 10

function moveElevator(floors) {

    if(!floors || floors.length === 0) return

    let parsedFloors = []

    floors.forEach((elem) => {
        let parsed = parseInt(elem)
        if(isNaN(parsed)){
            console.log('Arguments must be integers')
            process.exit()
        }
        parsedFloors.push(parseInt(elem))
    })

    console.log("mooooving the elevator", parsedFloors)
    const firstFloor = parsedFloors[0]

    let travelTime = 0

    let currentFloor = firstFloor
    parsedFloors.forEach((floor)=> {        
        let traveled = 0
        if(floor === currentFloor){
            return
        }
        traveled = Math.abs(floor - currentFloor)
        travelTime += traveled

        currentFloor = floor
    })
    console.log(travelTime * SINGLE_FLOOR_TRAVEL_TIME, " ", parsedFloors.toString())
    return travelTime * SINGLE_FLOOR_TRAVEL_TIME + " " + parsedFloors.toString()
}
export default moveElevator