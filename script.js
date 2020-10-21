const API_URL = "https://api.github.com/users/";

const form = document.getElementById('form'),
    input = document.getElementById('input'),
    main = document.getElementById('main');

function createUserCard(userData) {
    const cardHTML = `
        <div id="card">
            <div id="cardLeft">
                <img id="avatar" src=${userData.avatar_url} alt="avatar">
                <p id="userLogin">${userData.login}</p>
            </div>
            <div id="cardRight">
                <div id="cardRightTop">
                    <p id="userName">${userData.name}</p>
                    <p id="follow"><span>followers</span> ${userData.followers} <span>following</span> ${userData.following}</p>
                </div>
                <hr>
                <p id="bio"><span>bio</span> ${userData.bio}</p>
                <p id="location"><span>location</span> ${userData.location}</p>
                <p><span>repositories</span></p>
                <div id="repos"></div>
            </div>
        </div>
    `;
    main.innerHTML = cardHTML;
}

function addToUserCard(reposData) {
    const repos = document.getElementById('repos');

    reposData.slice(0, 10).forEach( (repo) => {
        const repoEl = document.createElement('a');
        repoEl.href = repo.html_url;
        repoEl.innerText = repo.name;
        repoEl.target = '_blank';
        repos.appendChild(repoEl);
    });
}

async function getRepos(userData) {
    const response = await fetch(API_URL + userData.login + '/repos');
    const reposData = await response.json();
    addToUserCard(reposData);
}

async function getUser(userName) {
    const response = await fetch(API_URL + userName);
    const userData = await response.json();

    console.log(userData);
    createUserCard(userData);
    getRepos(userData);
}

function init() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = input.value;

        if (userName) {
            getUser(userName);
            input.value = '';
        }
    });
}

init();