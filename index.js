var resultField= $("#result");






  function insertNumber(number) {

  	var existingNumbers= resultField.val();
      	$("#result").val(existingNumbers + number)
  }






  function clearResult(){
  	resultField.val('')
  }




  function calculate(){
  	var result = eval($("#result").val())
  	resultField.val(result)
  }



  function deletNumber(){
  	var presentValu = resultField.val();
    if (presentValu!='') {
  		resultField.var(presentValu.slice(0,1));
  	}
  }










  //-------------menu  bar start-----------//
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
//--------------menu bar stop-------------//
