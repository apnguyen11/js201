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

function recognizeEmployees (recognizedEmployee, employeeOfMonth){
    var blank = []
    for(var i = 0; i < recognizedEmployee.length; i++){
      for(var x = 0; x < employeeOfMonth.length; x++){
        if(recognizedEmployee[i] == employeeOfMonth[x]){
            
            blank.push('Outstanding job, ' + employeeOfMonth[x] + '!');
            ;
        } 
        if (recognizedEmployee[i] !== employeeOfMonth[x]){
            blank.push('Great job, ' + recognizedEmployee[i] + '!');
            
        }
    } 
  }
  return(blank);
   
}