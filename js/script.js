window.addEventListener('load', start);

let inputRange = null;
let inputFrequency = null;
let divPodcasts = null;

function start() {
  inputRange = document.querySelector('#inputRange');
  inputFrequency = document.querySelector('#inputFrequency');
  divPodcasts = document.querySelector('#divPodcasts');

  inputRange.addEventListener('input', handleRangeChange);

  renderPodcastFrom(inputRange.value);
}

function handleRangeChange(event) {
  let currentFrequency = event.target.value;
  inputFrequency.value = currentFrequency;

  renderPodcastFrom(currentFrequency);
}

function renderPodcastFrom(frequency) {
  let podcast = realPodcasts.find(item => item.id == frequency);
  (podcast) ? renderPodcast(podcast) : divPodcasts.innerHTML = "Nenhum podcast encontrado nesta frequência.";
}

function renderPodcast(podcast) {
  divPodcasts.innerHTML = `
  <img class="imgPod" src="../img/${podcast.img}" />
  <h2>${podcast.title}</h2>
  <p>${podcast.description}</p>
  <a href="${podcast.link}" target="_new" class="waves-effect waves-light btn">OUÇA ${podcast.title} AGORA MESMO</a>
  `
}