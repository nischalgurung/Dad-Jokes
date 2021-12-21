let jokeEl = document.querySelector('#joke');
let jokeBtn = document.querySelector('#jokeBtn');

generateJoke();

function generateJoke() {
    let config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', config).then(function (res) {
        return res.json();
    }).then(function (data) {
        jokeEl.textContent = data.joke;
    })
}

jokeBtn.addEventListener('click', function () {
    generateJoke();
})

