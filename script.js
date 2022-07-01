// const logo = document.querySelector(".logo");

// logo.addEventListener("mouseover", () => {
//     logo.style.rotate = '180deg';
// })

// logo.addEventListener("mouseout ", () => {
//     logo.style.rotate = '60deg';
// })






let finger = 0;
let song = new Audio('songs/1.mp3');
let master = document.getElementById('masterplay')
let mastersongname = document.getElementById('mastersongname')
let progressbar = document.getElementById('progressbar')
let gif = document.getElementById('gif')
let songitems = Array.from(document.getElementsByClassName('songitem'));
// let timestamp = Array.from(document.getElemenotsByClassName('timestamp'))[]


let songs = [
    { songname: "Altruism & Burn In Noise & Outsiders", filepath: "songs/1.mp3 ", coverpath: "covers/any.png", },
    { songname: "Damru - Good morning", filepath: "songs/2.mp3 ", coverpath: "covers/damru.png", },
    { songname: "Embrace", filepath: "songs/3.mp3 ", coverpath: "covers/xerox.png", },
    { songname: "Earthling and Ajja - Puddle jumper", filepath: "songs/4.mp3 ", coverpath: "covers/sensory.png", },
    { songname: "Green Nuns of the revolution - Two Vindaloos & An Onion bhagee", filepath: "songs/.mp3 ", coverpath: "covers/noise.png", },
    { songname: "Sesto sento - Key To The Universe", filepath: "songs/6.mp3 ", coverpath: "covers/sesto.png", },
    { songname: "Talamasca - A Frenchman In Mumbai", filepath: "songs/7.mp3 ", coverpath: "covers/talas.png", },
    { songname: "Technical Hitch-Mama India", filepath: "songs/8.mp3 ", coverpath: "covers/Untitled.png", },
    { songname: "Xerox - Force Of Life", filepath: "songs/9.mp3 ", coverpath: "covers/noise.png", },
    { songname: "Damru - yaatra", filepath: "songs/10.mp3", coverpath: "covers/damru.png", },

]

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})




const makeallplays = () => {
    Array.from(document.getElementsByClassName(
        'songitemplay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        }
        )
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (element) => {
        if (song.paused || song.currentTime <= 0) {
            makeallplays();
            finger = parseInt(element.target.id);
            element.target.classList.remove('fa-play-circle');
            element.target.classList.add('fa-pause-circle');
            song.src = `songs/${finger + 1}.mp3`;
            song.currentTime = 0;
            song.play();
            gif.style.opacity = 1;
            master.classList.remove('fa-play-circle');
            master.classList.add('fa-pause-circle');
        }
        else {
            makeallplays();
            finger = parseInt(element.target.id);
            element.target.classList.add('fa-play-circle');
            element.target.classList.remove('fa-pause-circle');
            song.src = `songs/${finger + 1}.mp3`;
            song.currentTime = 0;
            song.pause();
            gif.style.opacity = 0;
            master.classList.add('fa-play-circle');
            master.classList.remove('fa-pause-circle');
        }
    })
})















master.addEventListener('click', () => {
    if (song.paused || song.currentTime <= 0) {
        song.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')

    }
    else {
        song.pause();
        masterplay.classList.add('fa-play-circle')
        masterplay.classList.remove('fa-pause-circle')
        gif.style.opacity = 0;

    }
})


master.addEventListener('click', () => {
    if (song.paused || song.currentTime <= 0) {
        song.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')

    }
    else {
        song.pause();
        masterplay.classList.add('fa-play-circle')
        masterplay.classList.remove('fa-pause-circle')
        gif.style.opacity = 0;

    }
})

document.getElementById('next').addEventListener('click', () => {
    if (finger > 9) {
        finger = 0
    }
    else {
        finger += 1;
    }
    song.src = `songs/${finger + 1}.mp3`;
    mastersongname.innerText = songs[finger].songname;
    song.currentTime = 0;
    song.play();
    master.classList.remove('fa-play-circle');
    master.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (finger < 0) {
        finger = 0
    }
    else {
        finger -= 1;
    }
    song.src = `songs/${finger + 1}.mp3`;
    mastersongname.innerText = songs[finger].songname;
    song.currentTime = 0;
    song.play();
    master.classList.remove('fa-play-circle');
    master.classList.add('fa-pause-circle');

})