
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
        let eachMember = document.createElement('span');
        eachMember.setAttribute('class', 'groupMembers');
        eachMember.innerText = groupMembers[i];
        let memberGithubLinks = document.createElement('span');
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

