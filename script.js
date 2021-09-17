console.log("page loaded...");

var janeDoe = document.getElementById("janeDoe");

function changeName(){
    janeDoe.innerText = "Hermine Avagyan"
}

function removeUser(element){
    element.parentNode.parentNode.remove();
    var number = document.getElementById("connectionRequestNumber");
    console.log(number.innerText)
    number.innerText -=1

   
    
}


