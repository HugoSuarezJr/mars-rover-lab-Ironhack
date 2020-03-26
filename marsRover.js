// Rover Object Goes Here
// ======================

let rover = {
    direction : "N",
    x : 0,
    y : 0,
    travelLog: [{x:0,y:0}]
  };
  
  
  // ======================
  function turnLeft(rover){
    console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N"
      break;
  }
    console.log(rover.direction)
  }
  
  
  function turnRight(rover){
    console.log("turnRight was called!");
  switch(rover.direction){
      case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N"
      break;
  }
    console.log(rover.direction)
  }
  
  
  function moveForward(rover){
    console.log("moveForward was called")
    if(rover.y >= 0 && rover.y < 10 && rover.x >= 0 && rover.x < 10){
      if(rover.direction == "N"){
        rover.y--;
      } else if(rover.direction == "E"){
        rover.x++;
      } else if(rover.direction == "S"){
        rover.y++
      } else {
        rover.x--
      } console.log(rover)
      
      let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
    } else {
      console.log("You can't place Rover outside of Mars!!!!")
    }
  }
  
  function moveBackward(rover){
    console.log("moveBackward was called")
    if(rover.y >= 0 && rover.y < 10 && rover.x >= 0 && rover.x < 10){
      if(rover.direction == "N"){
        rover.y++;
      } else if(rover.direction == "E"){
        rover.x--;
      } else if(rover.direction == "S"){
        rover.y--
      } else {
        rover.x++
      } console.log(rover)
      
      let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
    } else {
      console.log("You can't place Rover outside of Mars!!!!")
    }
  }
  
  function movement(command){
    for(let i = 0; i < command.length; i ++ ){
      if(command[i] == "l"){
        turnLeft(rover);      
      }else if(command[i] == "r"){
        turnRight(rover);
      }else if(command[i] == "f"){
        moveForward(rover);
      }else if(command[i] == "b"){
        moveBackward(rover);
      }else{
        console.log("Not a command. Use: 'l'(left), 'r'(right), 'f'(forward), 'b'(backward).");
      }
    }
  }
  
  // Use this example move => movement("rffrfflfrffbbk")