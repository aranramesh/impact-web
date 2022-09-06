 //function print(){
  //var input = document.getElementById("input");
  //console.log(input.value);

//  var output = document.createElement("p");
//  output.innerText = input.value;
 // document.getElementsByTagName("BODY")[0].appendChild(output);


  //input.value = "";
//}/


 x=sumAll(8,68)

function sumAll() {
    let sum = 1;
    for(let i = 0; i< arguments.length; i++) {
      sum=sum*arguments[i];
    }
    console.log(sum);
  }