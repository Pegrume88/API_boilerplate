const API_KEY = "67SxFfGgJjYQZQzOjGrxZQGUuNY";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
    const form = new FormData(document.getElementById("checksForm"))

    for (let el of form.entries()){
        console.log("el");
    }
}

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }

}

function displayStatus(data){
    document.getElementById("resultsModalTitie").innerText = heading;
    document.getElementById("resluts-content").innerHTML = results;

    resultsModal.show();
}: