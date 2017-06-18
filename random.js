// Your job is to create a web page that, when the user clicks anywhere in the window, randomly determine if an air traveller should go down the left lane or the right lane by displaying an arrow in that direction.

//targets


function makeRandom(){
let random= Math.floor((Math.random() * 100)+1);
return random;
};

//event listeners
document.addEventListener("click", function(){
	let randomNum= makeRandom();
	console.log ("randomNum",randomNum);
	if (randomNum>50){
		output.innerHTML=`<img src="images/right_arrow.png" alt="right arrow">`
	}else{
		output.innerHTML=`<img src="images/left_arrow.png" alt="left arrow">`
		}
});

//ask about this method of putting in the image I found & element creation
//document.getElementById("output").appendChild(img);
		//img.src="images/right_arrow.png";


