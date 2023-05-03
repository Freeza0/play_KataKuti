//document.write("hi");
// best coding language for machine learning
/*
const name = "bruno";
for (let i=0; i<4; i++) {
	console.log(name[i]);
}	*/
let game_state = '_';
// tree button state which can only on if the other two are off
let board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
function click_option(event, state, otherbutton) {
	game_state = state; //set the button state
	// changing the other button
	const otherButton = document.getElementById(otherbutton);
	otherButton.style.boxShadow = 'black 2px 5px 4px';
	otherButton.style.color = 'white';
	otherButton.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

	// changing the clicked button
	const Button = event.target;
	Button.setAttribute('style', 'color: black'); //
	Button.setAttribute('style', 'background-color: rgba(0, 0, 0, 0)'); //
	//Button.setAttribute('style', 'box-shadow: none');
}
function reload(event) {	// for button-'play again'
	location.reload();
}
function click_box(event) {
	const Box = event.target;
	Box.innerHTML = game_state;
}
function clickBox(event) {
	const Box = event.target;
	if (game_state === 1) {
		Box.innerHTML = 'X';
		//click_option(event, 2, 'playX');
	}
	if (game_state === 2) {
		Box.innerHTML = 'O';
		//click_option(event, 1, 'playO');
	}
}