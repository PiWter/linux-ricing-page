const timer = document.getElementsByClassName("hora");

function updateTimer() {
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	timer[0].innerHTML = `${padZero(hours)}:${padZero(minutes)}`;
}

function padZero(num) {
	return num.toString().padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);
