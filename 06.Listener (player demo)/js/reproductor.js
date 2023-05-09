const songList = document.getElementById('song-list');
const playpauseSong = document.getElementById('play-pause');
const timeSong = document.getElementById('time-song');

let audio = null;
let actual = null;

songList.addEventListener('click', function(e){

    if(actual != null){
        const auxActive = document.getElementById(actual);
        auxActive.classList.remove('active');
    }

    if(e.target && e.target.tagName === 'BUTTON'){
        let song_button = e.target;
        song_button.classList.add('active');
        actual = song_button.getAttribute('id');

        const auxTitle = document.getElementById('title');
        auxTitle.innerHTML = actual;

        if(audio != null && !audio.paused){
            audio.pause();
        }
    
        let cancion = song_button.getAttribute('id');
        audio = new Audio();
        audio.src = `./songs/${cancion}.mp3`

        audio.addEventListener('loadedmetadata', function() {
            // La metadata del audio se ha cargado correctamente
            const duration = audio.duration;
            console.log(duration);
        });

        audio.load(); 

        console.log(audio.duration)
        audio.play();
    }
});


songList.addEventListener('mouseover', function(e){
    console.log('Pase el mouse por encima.');
});


playpauseSong.addEventListener('click', function(){
    if(audio != null){
        if(!audio.paused){
            audio.pause();
        } else if(audio.paused){
            audio.play();
        }
    }
});



