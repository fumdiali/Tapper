var count = 20;

function countDown() {
  if(count > 0){
    count--;
    var d = document.getElementById('display');
    d.innerHTML = count+" Taps left..";
    if(count===5){
    d.innerHTML = "Almost out of taps..";
    d.style.color = "red";
    }
    if(count===0){
    d.innerHTML = "Tapped out at "+count;
    document.getElementById('fresh').style.visibility = "visible";    
    }
   }

   }
   
 function refresh() {
 	var msg = confirm("Would you like to go again?");
 	if(msg){
 		//alert("Refresh the page for more taps..");
 		count = 20;
 		document.getElementById('fresh').style.visibility = "hidden";
 		var e = document.getElementById('display');
 		e.style.color = "black";
 		countDown();
 	}else{
     d.getElementById('display').innerHTML = "The End."; 	
 	} 
 }  