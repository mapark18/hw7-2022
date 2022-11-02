var video = document.getElementById("player1")
// or can use querySelector as well


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	console.log("Autoplay is set to false")
	console.log("Loop is set to false")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate *= 0.9
	console.log("Speed is now " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video")
	video.playbackRate /= 0.9
	console.log("Speed is now " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead")
	video.currentTime += 10
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").textContent == "Mute") {
		console.log("Mute")
		video.muted = true
		document.querySelector("#mute").textContent = "Unmute"
	}
	else {
		console.log("Unmute")
		video.muted = false
		document.querySelector("#mute").textContent = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is " + video.volume)
	video.volume = this.value / 100
	console.log("The current value is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "video oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
});