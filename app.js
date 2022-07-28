var score = 0;
function raxa(){
    console.log("Working Properly")
     let a =  document.getElementById("inp-1").value
     a = a.toLowerCase();
     for(var i = 0 ; i < a.length ; i++){
        if(a.slice(i,i+2) === "  "){
            alert("Double Space is not allowed")
            break;
        }
     }

console.log(a)
  
for(var j = 0 ; j< new1.length-1; j++){
    if(a === new1[j]){
        alert("Value Found")
        score++
        document.getElementById("l1").innerText = score
        console.log(score)
       if(score == 3){
        alert("You Win")
        score = 0
    }

        break;
    }
}
if (a !== new1[j]){
    score--
    document.getElementById("l1").innerText = score
    console.log(score)
    alert("Not Found")
    if(score == -3){
        alert("You Lose!!!")
        score = 0
    }
}


}