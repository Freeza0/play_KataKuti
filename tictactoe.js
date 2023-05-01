//document.write("hi");
// best coding language for machine learning
/*
const name = "bruno";
for (let i=0; i<4; i++) {
	console.log(name[i]);
}	*/
let button_state = 0; // 0, 1, 2, 3 for tree button state which can only on if the other two are off
/*
function Fun(idname) {
	//if ()
	var button = document.getElementById(idname);
	button.style.color = 'black';
}*/

function Fun(event) {
  const Button = event.target;
  Button.setAttribute('style', 'color: blue');
  Button.setAttribute('style', 'background-color: rgba(0, 0, 0, 0)');
  Button.setAttribute('style', 'box-shadow: none');
}