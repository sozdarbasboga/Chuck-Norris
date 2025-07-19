const jokeBox = document.getElementById("joke-box");
const newJokeBtn = document.getElementById("new-joke");

async function getJoke() {
  jokeBox.textContent = "Yükleniyor...";
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    jokeBox.textContent = data.value;
  } catch (error) {
    jokeBox.textContent = "Şaka yüklenemedi. İnternet bağlantınızı kontrol edin.";
  }
}


window.addEventListener("DOMContentLoaded", getJoke);

newJokeBtn.addEventListener("click", getJoke);
