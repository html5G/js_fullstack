let stratigies = {
   'S': function(salary) {
       return salary*5;
   },
   'A': function(salary) {
    return salary*3;
   },
  'B': function(salary) {
    return salary*2;
   },
  'C': function(salary) {
    return salary*1;
   }
}
function calculate(level,salary) {
    return stratigies[level](salary);
}
