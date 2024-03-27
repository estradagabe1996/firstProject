// Movie API
// Random movie list from 2023 under 'Adventure' category
// Has poster images, movie titles (would need to parse through)

fetch('https://moviesdatabase.p.rapidapi.com/titles?year=2023&titleType=movie&genre=Adventure', {
    headers: {
        'X-RapidAPI-Key': 'af40636de9msh6a580fcf8c8fa3ap158386jsnf7fe347d428c',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
})
.then((response) => response.json())
.then((response) => {
    console.log(response.results[0])
});



// Start Page

function startPage() {
    // This part of the function gets and prints out the current date
    let startDate = document.getElementById('startDate');
    let currentDate = new Date();
    startDate.innerText = currentDate.toDateString();

    // used jQuery to hide the game screen
    $("#gameScreen").hide();

    // let gameScreen = document.getElementById('gameScreen')
    // gameScreen.style.display = "none";
    
    //used jQuery to animate the game logo as an easter egg (Happy Easter!)
    $("#easterButton").click(function(){
        $(".startPageLogo").animate({height: '800px', opacity: '0.4'}, "slow");
        $(".startPageLogo").animate({width: '800px', opacity: '0.8'}, "slow");
        $(".startPageLogo").animate({height: '400px', opacity: '0.4'}, "slow");
        $(".startPageLogo").animate({width: '400px', opacity: '0.8'}, "slow");
    });

}

function startGame() {

    // Codes using jQuery to hide the "start page" and to show the "game screen"
    $("#startPageDiv").hide();

    // let startMenu = document.getElementById('startPageDiv');
    // startMenu.style.display = "none";

    $("#gameScreen").show();

    // let gameScreen = document.getElementById('gameScreen')
    // gameScreen.style.display = "block";

}

// Easter egg on start page
// $(document).ready((){
    
// });

// Gabe Code
