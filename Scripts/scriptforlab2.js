function Check() {
    let check = 0;
    let q1 = document.testingform.q1.value;
    let q2 = document.testingform.q2.value;
    let q3 = document.testingform.q3.value;
    let q4 = document.getElementById("q41");
    if (q4.checked) {
      check += 0.5;
    }
    q4 = document.getElementById("q42");
    if (q4.checked) {
      check += 0.5;
    }
    if (q1 == "a") check++;
    if (q2 == "a") check++;
    if (q3 == "a") check++;
    document.getElementById("score").innerHTML =
      "Your DHTML and DOM-model test result is  " + (check * 100) / 4 + "%";

    document.getElementById("correct1").style.cssText = ` color: green; font-size: 25px; `;
    document.getElementById("correct2").style.cssText = ` color: green; font-size: 25px; `;
    document.getElementById("correct3").style.cssText = ` color: green; font-size: 25px; `;
    document.getElementById("correct41").style.cssText = ` color: green; font-size: 25px; `;
    document.getElementById("correct42").style.cssText = ` color: green; font-size: 25px; `;
}

let Clock = setInterval(Timer, 1000);

function Timer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
}

function visibility(){
  document.getElementById("block111").style.display= "inline";
 
}

function DateCheck() {
    let s= document.getElementById("datainput").value;//document.getElementById("year").value +'-' + document.getElementById("month").value + "-" + document.getElementById("day").value ;
    
    if (document.getElementById("datainput").value=='')
    {
       s= document.getElementById("year").value +'-' + document.getElementById("month").value + "-" + document.getElementById("day").value ;
       document.getElementById("datainput").value= s;
      }

    let out = Date.parse(s);
    if (isNaN(out)) alert("Invalid data input " + "\nPut correct data in fields or calendar");
    else alert("Its a great day!");

    return false;
}