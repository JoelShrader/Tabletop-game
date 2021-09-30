var name = prompt("Please tell me your name: ");
while (name == 'null') {
    name = prompt("Please tell me your name: ");
}
if (name !== 'null') {
    alert("Welcome, " + name + "!");
}

function myFunction() {
    var input = document.getElementById("result").value;
    if (input == 10) {
        document.getElementById("answer").innerHTML = "Correct!"
    } else {
        document.getElementById("answer").innerHTML = "Nope!"
    }
}
var diceForm = document.getElementById("dice");
diceForm.addEventListener("submit", function(event) {
  event.preventDefault();
  myFunction();
});

function secondFunction() {
    var sospook = document.getElementById("question").value;
    var parent = document.getElementById('image');
    var imagePath = "images/junglecityruin.jpg";

    for (let i = sospook; i > 0; i--) {
        var img = new Image();
        img.src = imagePath;
        parent.appendChild(img);
    }
}

var spookyJunglesForm = document.getElementById("spookyJungles");
spookyJunglesForm.addEventListener("submit", function(event) {
  event.preventDefault();
  secondFunction();
});