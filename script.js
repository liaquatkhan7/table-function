
var enterNumber = parseInt(prompt("Enter the number "));
function table(enterNumber) {
        for (var i = 0; i <= 20; i++){
        document.write("<h2>" + enterNumber + " * " + i + " = " + (enterNumber * i) + "</h2>" + "<br>");
        // document.getElementById("table1").innerHTML =  enterNumber + " * " + i + " = " + (enterNumber * i) + "<br>";   
}   
}
table(enterNumber);
