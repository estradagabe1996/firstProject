// Movie API
// Random movie list from 2023 under 'Adventure' category
// Has poster images, movie titles (would need to parse through)
let randomItem = [];

fetch('https://moviesdatabase.p.rapidapi.com/titles?year=2023&titleType=movie&genre=Adventure', {
    headers: {
        'X-RapidAPI-Key': 'af40636de9msh6a580fcf8c8fa3ap158386jsnf7fe347d428c',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
})



.then((response) => response.json())
.then((response) => {
    for(let j = 0; j < 5; j++) {
        let randomIndex = Math.ceil(Math.random() * 7);
                console.log(randomIndex);
                console.log("Movie Title: " + response.results[randomIndex].titleText.text);
            randomItem.push(response.results[randomIndex].primaryImage);
            // randomItem.push(response.results[randomIndex].primaryImage);
                console.log("Random Item Test: " + randomItem[j].url);
    }
});




function starterItem() {
    
    let detailedContainer = document.getElementById("b0");
    let pledgeImage = document.createElement("img");
    // let testHideDiv = document.createElement('div')

    pledgeImage.src = randomItem[0].url;
    pledgeImage.setAttribute('class', 'testImg');

    detailedContainer.appendChild(testDiv);
    testDiv.appendChild(pledgeImage);
    // detailedContainer.appendChild(pledgeImage);
    
}

starterItem();


function first() {
    let detailedContainer = document.getElementById("b1");
    let pledgeImage = document.createElement("img");

    pledgeImage.src = randomItem[0].url;
    pledgeImage.setAttribute('class', 'testImg');

    detailedContainer.appendChild(pledgeImage);
    randomItem.splice(0 , 1);

   
    // document.getElementById("btn btn-primary").disabled = true;  
}
function second() {
    let detailedContainer = document.getElementById("b2");
    let pledgeImage = document.createElement("img");

    pledgeImage.src = randomItem[0].url;
    pledgeImage.setAttribute('class', 'testImg');

    detailedContainer.appendChild(pledgeImage);
    randomItem.splice(0 , 1);

    
   
}
function third() {
    let detailedContainer = document.getElementById("b3");
    let pledgeImage = document.createElement("img");

    pledgeImage.src = randomItem[0].url;
    pledgeImage.setAttribute('class', 'testImg');

    detailedContainer.appendChild(pledgeImage);
    randomItem.splice(0 , 1);

    
   
}
function fourth() {
    let detailedContainer = document.getElementById("b4");
    let pledgeImage = document.createElement("img");

    pledgeImage.src = randomItem[0].url;
    pledgeImage.setAttribute('class', 'testImg');

    detailedContainer.appendChild(pledgeImage);
    randomItem.splice(0 , 1);

    

}
function fifth() {
    let detailedContainer = document.getElementById("b5");
    let pledgeImage = document.createElement("img");

    pledgeImage.src = randomItem[0].url;
    pledgeImage.setAttribute('class', 'testImg');

    detailedContainer.appendChild(pledgeImage);
    randomItem.splice(0 , 1);

    
    
}


// Start Page

function startPage() {
    // This part of the function gets and prints out the current date

    let startDate = document.getElementById('startDate');
    let currentDate = new Date();
    startDate.innerText = currentDate.toDateString();

    // used jQuery to hide the game screen
    $("#gameScreen").hide();

    $("#howtoplaypopup").hide();

    
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
