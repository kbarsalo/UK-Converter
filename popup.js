/**
 Global variables
*/
var choice; //stores the selected currency


/**
 When user clicks the enter button the checked info is recorded to be processed. 
*/
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("submit").addEventListener('click', clickHandler);
}); 

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("process").addEventListener('click', otherHandler);
}); 


/**
 NEEDS WORK
 Has to take the checked currency and see what kind of money is needed for conversion. 
 Currently show choice as undefined.
*/

function clickHandler(){
  if (document.getElementById('c1').checked) {
    choice = document.getElementById('c1').value;
  }
  else if (document.getElementById('c2').checked) {
    choice = document.getElementById('c2').value;
  }
}



document.getElementById('result').innerHTML = choice;