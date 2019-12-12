/*********************************************/
// ==== GRP Travel to Mars w/ Rover JS ======/
/*******************************************/

//alert("Welcome to the Rover Driving Machine! Below is a print map of the Rover's current location. The marsLand map grid is 10 x 10, so please avoid getting rowdy, Captain. Original position of the rover is facing (N)orth @ Position X = 0 & Y = 0.")

// ======================
// Rover Object
// ======================

var rover = { 
    direction : 'N',
    x : 0,
    y : 0,
    travelLog : [[0,0]],
};

// =======================================================
// marsLand Board 10 x 10 Grid w/ initial Rover Position
// =======================================================

var marsLand = [ 
  ['mRover',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];


// =========================================
// GAME START - Console.LOG
// =========================================

console.table(marsLand);
console.log('Use moveRover(x) and replace the (x) inside with the first letter of the direction to drive the Rover - (F)orward / (B)ackwards / (L)eft / (R)ight. You can also change the direction the Rover is currently facing with (l)eft and (r)ight.')
console.log('Safe Driving out there, Captain!  ;) ');


// ================================
// Rover - *Left Turn*
// ======================

function turnLeft(rover) {
    switch(rover.direction){
        case (rover.direction = 'N'):
                rover.direction = 'W'
        break;
        case (rover.direction = 'W'):
                rover.direction = 'S'
        break;
        case (rover.direction = 'S'):
                rover.direction = 'E'
        break;
        case (rover.direction = 'E'):
                rover.direction = 'N'
        break;
        default: rover.direction = '??'
        }
            console.log("Rover has turned LEFT! No change in coordinates.");
            rover.travelLog.push([rover.x,rover.y]);
    };        
 

// =========================================
// Rover - *Right Turn*
// ======================

function turnRight(rover) {
  switch(rover.direction){
        case (rover.direction = 'N'):
                rover.direction = 'E'
        break;
        case (rover.direction = 'E'):
                rover.direction = 'S'
        break;
        case (rover.direction = 'S'):
                rover.direction = 'W'
        break;
        case (rover.direction = 'W'):
                rover.direction = 'N'
        break;
        default: rover.direction = 'Check buddy, something went wrong!'
        }
            console.log("Rover has turned RIGHT! No change in coordinates.");
            rover.travelLog.push([rover.x,rover.y]);
    };       


// =========================================
// Rover - *Move Forward*
// ===========================

function moveForward(rover) {
    switch(rover.direction){
        case (rover.direction = 'W'):
            rover.x = rover.x - 1
        break;
        case (rover.direction = 'E'):
            rover.x = rover.x + 1
        break;
        case (rover.direction = 'S'):
            rover.y = rover.y + 1
        break;
        case (rover.direction = 'N'):
            rover.y = rover.y - 1
        break;
        default : rover.direction = 'Check buddy, something went wrong!'
    }
      console.log("moveForward was called! The new Rover Position is X = " + rover.x + " and Y = " + rover.y)
      rover.travelLog.push([rover.x,rover.y]);
}

// =========================================
// Rover - *Move Backward*
// ===========================

function moveBackward(rover) {
    switch(rover.direction){
        case (rover.direction = 'W'):
            rover.x = rover.x + 1
        break;
        case (rover.direction = 'E'):
            rover.x = rover.x - 1
        break;
        case (rover.direction = 'N'):
            rover.y = rover.y + 1
        break;
        case (rover.direction = 'S'):
            rover.y = rover.y - 1
        break;
        default : rover.direction = 'Check buddy, something went wrong!'
    }
      console.log("moveBackward was called! The new Rover Position is X = " + rover.x + " and Y = " + rover.y)
      rover.travelLog.push([rover.x,rover.y]);
}

// =========================================
// Rover - *Move RiGHT*
// ===========================

function moveRight(rover) {
    switch(rover.direction){
        case (rover.direction = 'W'):
            rover.y = rover.y - 1
        break;
        case (rover.direction = 'E'):
            rover.y = rover.y + 1
        break;
        case (rover.direction = 'S'):
            rover.x = rover.x - 1
        break;
        case (rover.direction = 'N'):
            rover.x = rover.x + 1
        break;
        default : rover.direction = 'Check buddy, something went wrong!'
    }
      console.log("moveRight was called! The new Rover Position is X = " + rover.x + " and Y = " + rover.y)
      rover.travelLog.push([rover.x,rover.y]);
}

// =========================================
// Rover - *Move LeFT*
// ===========================

function moveLeft(rover) {
    switch(rover.direction){
        case (rover.direction = 'W'):
            rover.y = rover.y + 1
        break;
        case (rover.direction = 'E'):
            rover.y = rover.y - 1
        break;
        case (rover.direction = 'S'):
            rover.x = rover.x + 1
        break;
        case (rover.direction = 'N'):
            rover.x = rover.x - 1
        break;
        default : rover.direction = 'Check buddy, something went wrong!'
    }
      console.log("moveLeft was called! The new Rover Position is X = " + rover.x + " and Y = " + rover.y)
      rover.travelLog.push([rover.x,rover.y]);
}

// =========================================
// Rover - *General Movement > FUNCTIONS **
// =========================================

function moveRover(str) {
    for (let i = 0; i < str.length; i++) {
        switch(str[i]){
            case str[i] = 'F': moveForward(rover)
            break;
            case str[i] = 'r': turnRight(rover)
            break;
            case str[i] = 'l': turnLeft(rover)
            break;
            case str[i] = 'B': moveBackward(rover)
            break;
            case str[i] = 'R': moveRight(rover)
            break;
            case str[i] = 'L': moveLeft(rover)
            break;
            default: console.log('Check buddy, something went wrong!');    
        }
        rover.x = rover.travelLog[rover.travelLog.length - 1][0]
    rover.y = rover.travelLog[rover.travelLog.length - 1][1]
    } 
//    rover.x = rover.travelLog[rover.travelLog.length - 1][0]
//    rover.y = rover.travelLog[rover.travelLog.length - 1][1]
    
    //**********************************************************//
   // Needed to clear out marsLand & move ('R') as new value  //
  //**********************************************************//
    
    marsLand = [[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']]; 
    
        
    marsLand[rover.y].splice(rover.x, 1, "mRover");
    console.log('Rover location updated, Captain! Currently facing (' + rover.direction +')');
    console.table(marsLand)
    console.log(rover.travelLog);
    }
    

