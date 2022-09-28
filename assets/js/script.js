const API_KEY = "67SxFfGgJjYQZQzOjGrxZQGUuNY";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModel = new bootstrap.Modal(document.getElementById("resultsModel"));

//wire up the button
document.getElementById("status").addEventListener("click", e => getStatus(e));


