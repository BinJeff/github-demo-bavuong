function playSound() {
	const audio = new Audio('boob.mp3');
	audio.play();
}

const pussyy = document.querySelector('#pussy');

pussyy.onclick = () => {
	playSound();
}