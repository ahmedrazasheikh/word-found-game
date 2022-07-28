 var score = 0
 var tar = 0 
 function raxa(clicked_id){
     console.log("Working Properly")
    //  console.log(clicked_id);    
     result = document.getElementById('inp-1');
     result.value += clicked_id 
    //  result.value = result.value.toLowerCase();
     console.log(result.value)
for(var i = 0 ; i< new1.length; i++){
if(result.value ===  new1[i]){
    alert("Value Found")
    score++
    document.getElementById("l1").innerHTML =  "score :" + " " + score
    console.log(score)
    result.value = ""
    break;
}
}



    

     }














// var score = 0;
// function raxa(){
//     console.log("Working Properly")
//      let a =  document.getElementById("inp-1").value
//      a = a.toLowerCase();
//         if(a === "" || "  "){
//             alert("Double Space is not allowed")
        
//         }

// console.log(a)
  
// for(var j = 0 ; j< new1.length-1; j++){
//     if(a === new1[j]){
//         alert("Value Found")
//         score++
//         document.getElementById("l1").innerText = score
//         console.log(score)
//        if(score == 3){
//         alert("You Win")
//         score = 0
//     }

//         break;
//     }
// }
// if (a !== new1[j]){
//     score--
//     document.getElementById("l1").innerText = score
//     console.log(score)
//     alert("Not Found")
//     if(score == -3){
//         alert("You Lose!!!")
//         score = 0
//     }
// }

// 
