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

    // This part of the function prints the Creators' informations
    let groupInfo = document.getElementById('groupInfo');
    let groupGitHubInfo = document.getElementById('groupGitHubInfo');
    let groupMembers = ["Gabriel", "Ashley", "Jessie"];
    let githubLinks = ["https://github.com/estradagabe1996", "https://github.com/moneymornings", "https://github.com/Hoang-J"]
    for(i = 0; i < groupMembers.length; i++) {
        let eachMember = document.createElement('div');
        eachMember.setAttribute('class', 'groupMembers');
        eachMember.innerText = groupMembers[i];
        let memberGithubLinks = document.createElement('div');
        memberGithubLinks.setAttribute('class', 'groupMembers');
        memberGithubLinks.innerText = githubLinks[i];
        groupInfo.appendChild(eachMember);
        groupGitHubInfo.appendChild(memberGithubLinks);
    }
    // let creator1 = document.createElement('p');
    // let creator2 = document.createElement('p');
    // let creator3 = document.createElement('p');

    // creator1.innerText = "Gabriel";
    // creator2.innerText = "Ashley";
    // creator3.innerText = "Jessie";

    // groupInfo.appendChild(creator1);

}

function startGame() {
    let startMenu = document.getElementById('startPageDiv');
    startMenu.style.display = "none";
}




// Gabe Code




// Ashley - close pop up
function closePop(){
    let button = document.getElementById ("howtoplaypopup")
    howtoplaypopup.style.display = "none";
}