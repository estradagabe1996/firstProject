// Movie API
// Random movie list from 2023 under 'Adventure' category
// Has poster images, movie titles (would need to parse through)

// Arrays
let randomItem = [];

// API Calls
fetch('https://moviesdatabase.p.rapidapi.com/titles?limit=50&year=2023&titleType=movie&genre=Adventure', {
    headers: {
        'X-RapidAPI-Key': 'af40636de9msh6a580fcf8c8fa3ap158386jsnf7fe347d428c',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
})

.then((response) => response.json())
.then((response) => {
    for(let j = 0; j < 5; j++) {
        let randomIndex = Math.ceil(Math.random() * 49);
                console.log(randomIndex);
                console.log("Movie Title: " + response.results[randomIndex].titleText.text);
            randomItem.push(response.results[randomIndex].primaryImage);
            // randomItem.push(response.results[randomIndex].primaryImage);
                console.log("Random Item Test: " + randomItem[j].url);
    }
});

    //API 2/

    fetch('https://movies-api14.p.rapidapi.com/shows',{
    headers: {
        'X-RapidAPI-Key': '4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }

})
.then((response) => response.json())
.then((data) => console.log(data))





// Start Game Function
function startGameButton(category, id) {
    let detailedContainer = document.getElementById(id);
    document.getElementById(id).innerHTML = "";
    let currentImage = document.createElement ("div");

    let pledgeImage = document.createElement("img");
    // let testHideDiv = document.createElement('div')

    pledgeImage.src = category[0].url;
    pledgeImage.setAttribute('class', 'starterImg');


    currentImage.appendChild(pledgeImage);
    detailedContainer.appendChild(currentImage);
    
    
}


// fucntions for the buttons to add poster to said button
function placeItem(category, id) {
    let detailedContainerDiv = document.getElementById(id);
    let pledgeImage = document.createElement("img");

    pledgeImage.src = category[0].url;
    pledgeImage.setAttribute('class', 'testImg');

    detailedContainerDiv.appendChild(pledgeImage);

    category.splice(0 , 1);
    // document.getElementById("btn btn-primary").disabled = true;  
    startGameButton(category, `b0`);
}

// Hard Coded version of the place item functions
// function second() {
//     let detailedContainer = document.getElementById("b2");
//     let pledgeImage = document.createElement("img");

//     pledgeImage.src = randomItem[0].url;
//     pledgeImage.setAttribute('class', 'testImg');

//     detailedContainer.appendChild(pledgeImage);
//     randomItem.splice(0 , 1);
//     starterItem();
    
// }
// function third() {
//     let detailedContainer = document.getElementById("b3");
//     let pledgeImage = document.createElement("img");

//     pledgeImage.src = randomItem[0].url;
//     pledgeImage.setAttribute('class', 'testImg');

//     detailedContainer.appendChild(pledgeImage);
//     randomItem.splice(0 , 1);
//     starterItem();
// }
// function fourth() {
//     let detailedContainer = document.getElementById("b4");
//     let pledgeImage = document.createElement("img");

//     pledgeImage.src = randomItem[0].url;
//     pledgeImage.setAttribute('class', 'testImg');

//     detailedContainer.appendChild(pledgeImage);
//     randomItem.splice(0 , 1);
//     starterItem();
    
    
// }
// function fifth() {
//     let detailedContainer = document.getElementById("b5");
//     let pledgeImage = document.createElement("img");

//     pledgeImage.src = randomItem[0].url;
//     pledgeImage.setAttribute('class', 'testImg');

//     detailedContainer.appendChild(pledgeImage);
//     randomItem.splice(0 , 1);
//     starterItem();
// }


// Start Page

// Function to 
function startPage() {
    // This part of the function gets and prints out the current date

    let startDate = document.getElementById('startDate');
    let currentDate = new Date();
    startDate.innerText = currentDate.toDateString();

    // used jQuery to hide the game screen
    $("#gameScreen").hide();

    $("#howtoplaypopup").hide();

    //used jQuery to animate the game logo as an easter egg (Happy Easter!)
    $("#easterButton").click(function(){
        $(".startPageLogo").animate({height: '800px', opacity: '0.4'}, "slow");
        $(".startPageLogo").animate({width: '800px', opacity: '0.8'}, "slow");
        $(".startPageLogo").animate({height: '400px', opacity: '0.4'}, "slow");
        $(".startPageLogo").animate({width: '400px', opacity: '0.8'}, "slow");
    });
    
}

// let randomItem = [];

function startGame() {

    // Codes using jQuery to hide the "start page" and to show the "how to play instructions"
    $("#startPageDiv").hide();

    // let startMenu = document.getElementById('startPageDiv');
    // startMenu.style.display = "none";

    // used jQuery to show the how to play instructions
    $("#howtoplaypopup").show();

}


// Gabe Code


// Ashley - pop-up//
function closePop(){
    let button = document.getElementById ("howtoplaypopup")
    howtoplaypopup.style.display = "none";

    // used jQuery to show the game screen
    $("#gameScreen").show();
}
