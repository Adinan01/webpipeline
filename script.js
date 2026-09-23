/* =========================
   SEARCH
========================= */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search.");
    } else {
        alert("Searching for: " + searchText);
    }

});


/* =========================
   HERO BUTTONS
========================= */

function exploreNow() {

    document
        .getElementById("trending")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function watchTrailer() {

    alert(
        "🎬 Trailer player will open here!"
    );

}


/* =========================
   CARD DETAILS
========================= */

function showDetails(title) {

    alert(
        "🎬 " + title +
        "\n\nMore information about this entertainment item will appear here."
    );

}


/* =========================
   MUSIC PLAYER
========================= */

let isPlaying = false;

let progress = 0;

const songs = [
    "Summer Nights",
    "Midnight Drive",
    "Neon Dreams",
    "Lost Memories"
];

let songIndex = 0;

const songTitle =
    document.getElementById("songTitle");

const playBtn =
    document.getElementById("playBtn");

const progressBar =
    document.getElementById("progressBar");


function playMusic() {

    isPlaying = !isPlaying;

    if (isPlaying) {

        playBtn.innerHTML = "⏸";

        startProgress();

    } else {

        playBtn.innerHTML = "▶";

    }

}


function startProgress() {

    if (!isPlaying) return;

    progress += 1;

    if (progress >= 100) {
        progress = 0;
    }

    progressBar.style.width =
        progress + "%";

    setTimeout(startProgress, 500);
}


function nextSong() {

    songIndex++;

    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    songTitle.innerText =
        songs[songIndex];

    progress = 0;

    progressBar.style.width = "0%";
}


function previousSong() {

    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    songTitle.innerText =
        songs[songIndex];

    progress = 0;

    progressBar.style.width = "0%";
}


/* =========================
   GAMES
========================= */

function playGame(gameName) {

    alert(
        "🎮 Starting " +
        gameName +
        "..."
    );

}


/* =========================
   NEWSLETTER
========================= */

function subscribeUser() {

    const email =
        document.getElementById("email").value.trim();

    if (email === "") {

        alert(
            "Please enter your email address."
        );

        return;
    }

    if (!email.includes("@")) {

        alert(
            "Please enter a valid email."
        );

        return;
    }

    alert(
        "🎉 Successfully subscribed!\n\n" +
        email
    );

    document.getElementById("email").value = "";

}


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {

    const nav =
        document.querySelector(".nav-links");

    if (
        nav.style.display === "flex"
    ) {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection =
            "column";

        nav.style.position =
            "absolute";

        nav.style.top = "75px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.padding = "20px";

        nav.style.background =
            "#0b0b12";
    }

});
