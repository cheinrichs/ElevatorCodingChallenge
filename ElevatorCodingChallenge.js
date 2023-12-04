import  moveElevator  from "./elevator.js"

const args = process.argv.slice(2)

if(args.length < 1){
    console.log('Error: No floors given')
    process.exit()
}

moveElevator(args)