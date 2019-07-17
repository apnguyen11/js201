// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.
//
// Examples:
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
// > ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
//
// Hint: What is the best data structure for the employees of the month list?



function recognizeEmployees (recognizedEmployees, employeesOfMonth){

  //first get all emplyee names
  var allEmployees = [];
  for(var i = 0; i < recognizedEmployees.length; i++){
    allEmployees.push(recognizedEmployees[i])
  };
  
  for(var x = 0; x < employeesOfMonth.length; x++){
    if(existsIn(employeesOfMonth[x], allEmployees)){
      continue;
    } else {
      allEmployees.push(employeesOfMonth[x]);
    }
  }

  // for each employee name recognize them
  var finalEmployees = [];
  for(var i = 0; i < recognizedEmployees.length; i++){
    var sentence = recognizeEmployee(recognizedEmployees[i], recognizedEmployees, employeesOfMonth); 
    if(sentence == null){
      continue;
    }
    finalEmployees.push(sentence);

  } 

  return finalEmployees;
  


}

function recognizeEmployee(name, recognizedEmployees, employeesOfMonth){
  // return Outstanding job! or return Great job!
  if(existsIn(name, employeesOfMonth)){
    return "Outstanding job, " + name + "!";
  } else if (existsIn(name, recognizedEmployees)){
    return "Great job, " + name + "!";
  } else {
    return null;
  }

}

function existsIn(thing, list){
  for(var i = 0; i < list.length; i++){
    if(thing == list[i]){
      return true;
    } 
  }
  return false;
}

