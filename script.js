console.log("Welcome to Spotify");



let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
// audioElement.play();
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));




let songs = [
    {songName: "OH ho ho",filepath: "music/1.mp3", coverpath: "covers/1.jpeg" },
    {songName: "Baby ko base pansand hai",filepath: "music/2.mp3", coverpath: "covers/2.jpeg" },
    {songName: "Apna time ayega",filepath: "music/3.mp3", coverpath: "covers/3.jpeg" },
    {songName: "OH ho ho",filepath: "music/4.mp3", coverpath: "covers/4.jpeg" },
    {songName: "OH ho ho",filepath: "music/5.mp3", coverpath: "covers/5.jpeg" },
    {songName: "OH ho ho",filepath: "music/6.mp3", coverpath: "covers/6.jpeg" },
    {songName: "OH ho ho",filepath: "music/7.mp3", coverpath: "covers/2.jpeg" }
];

songItems.forEach((element,i)=> {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

    
});


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity= 1;

    }
    else if(audioElement.currentTime>0){
        audioElement.pause();
        // masterPlay.classList.remove(' fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity= 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')

    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);

    myProgressBar.value = progress;

    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime =( (myProgressBar.value/100 )*audioElement.duration);
    })

})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        
        audioElement.src = `music/${songIndex+1}.mp3`;
        
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})



document.getElementById('next').addEventListener("click", ()=>{
    
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }

    audioElement.src = `music/${songIndex+1}.mp3`;
        
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity= 1;



    

})


document.getElementById('previous').addEventListener("click", ()=>{
    
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex-=1;
    }

    audioElement.src = `music/${songIndex+1}.mp3`;
        
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity= 1;


    

})
