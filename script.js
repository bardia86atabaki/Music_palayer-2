let songs = [
	{artistName: "Queen", 
	songName: "313 - Sample", 
	url: "https://dl.roadmusics.ir/Music/1402/11/Reza%20Pishro%20%26%20Ali%20Owj/Reza%20Pishro%20%26%20Ali%20Owj%20-%20313%20%28128%29.mp3"},
	{artistName: "Reza Pishro", 
	 songName: 'avatar 2- Sample',
	 url: "https://dl.roadmusics.ir/Music/1402/11/Reza%20Pishro%20%26%20Ali%20Owj/Reza%20Pishro%20%20%20Ali%20Owj%20-%20Avatar%202%20%28128%29.mp3"},
	{artistName: "Reza Pishro", 
	 songName: "pay to - Sample",
	 url: "https://dl.roadmusic.ir/Album/1402/05/Putak/128/05%20Putak%20%26%20Reza%20Pishro%20_%20P2%20%28128%29.mp3"}, 
	{artistName: "Reza Pishro", 
	 songName: "zombi- Sample",
	 url: "https://dl.roadmusic.ir/Album/1402/05/Reza%20Pishro%20/128/01%20Reza%20Pishro%20-%20Zombie%20%28128%29.mp3"}, 
	{artistName: "Reza Pishro", 
	 songName: "bache bahala - Sample",
	 url: "https://dl.roadmusic.ir/Album/1402/05/Reza%20Pishro%20/128/03%20Reza%20Pishro%20_%20Bache%20Bahala%20%28128%29.mp3"}, 

]

let audio = new Audio(songs[0].url);
let previousButton = document.querySelector('.previous')
let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let nextButton = document.querySelector('.next')
let firstG = document.querySelector(".first-g")
let secondG = document.querySelector(".second-g")
let artist = document.querySelector(".artist")
let song = document.querySelector(".song")
let popUp = document.querySelector('.alert')
let musicLogo = `<i class="fas fa-music"></i>`

let currentSongIndex = 0

const spin = () => {
 firstG.classList.add('spin')
 secondG.classList.add('spin')
}

playButton.addEventListener('click', function(){
	audio.play()
	artist.innerText = currentSong().artistName
	song.innerHTML = currentSong().songName + musicLogo
	spin()
  audio.loop='true'
})

pauseButton.addEventListener('click', function(){
	audio.pause()
	firstG.classList.remove('spin')
	secondG.classList.remove('spin')
})

const currentSong = (index) => {
if(index === undefined){
	return songs[currentSongIndex]
} else if (index < songs.length ){
	artist.innerText = songs[index].artistName 
	song.innerHTML = songs[index].songName + musicLogo
 }
}

const nextSong = ()=> {
	newSongIndex = currentSongIndex + 1
	currentSong(newSongIndex)
	if(newSongIndex < songs.length){
		audio.pause()
		audio = new Audio(songs[newSongIndex].url)
		audio.play()
		audio.loop='true'
		return currentSongIndex = newSongIndex
	} else {
		popUp.classList.add('pop-up')
		popUp.innerText = "This the last song."
			setTimeout(() => {
			popUp.classList.remove('pop-up')
		}, 1000)
		return currentSongIndex
	}
	
}

const previousSong= () => {
	newSongIndex = currentSongIndex - 1
	if(newSongIndex < 0 ){
		popUp.classList.add('pop-up')
		popUp.innerText = 'This is the first song.'
		setTimeout(() => {
			popUp.classList.remove('pop-up')
		}, 1000)
		return currentSongIndex 
	} else {
		audio.pause()
		currentSong(newSongIndex)
		audio = new Audio(songs[newSongIndex].url)
		audio.play()
		audio.loop='true'
		return currentSongIndex = newSongIndex
	}
}

nextButton.addEventListener('click', function(){
 nextSong()
 spin()
})

previousButton.addEventListener('click', function(){
	previousSong()
	spin()
})

