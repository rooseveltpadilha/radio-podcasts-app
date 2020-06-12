window.addEventListener('load', start);

let inputRange = null;
let inputFrequency = null;
let divPodcasts = null;

function start() {
  inputRange = document.querySelector('#inputRange');
  inputFrequency = document.querySelector('#inputFrequency');
  divPodcasts = document.querySelector('#divPodcasts');

  inputRange.addEventListener('input', handleRangeChange);

  inputRange.value = '88.5';
  inputFrequency.value = '88.5';
  renderPodcastFrom('88.5');
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

function handleChangeRadio() {
  let frequencias = realPodcasts.map(item => Number(item.id));
  let currency = Number(inputRange.value);

  var closest = frequencias.reduce(function (prev, curr) {
    return (Math.abs(curr - currency) < Math.abs(prev - currency) ? curr : prev);
  });

  let indexClose = frequencias.indexOf(closest);

  let last = (frequencias[frequencias.length - 1]);

  if (currency >= 87.5 && currency < last) {
    if (currency < closest) {
      inputFrequency.value = frequencias[indexClose];
      inputRange.value = frequencias[indexClose];
      renderPodcastFrom(frequencias[indexClose]);
    } else {
      inputFrequency.value = frequencias[indexClose + 1];
      inputRange.value = frequencias[indexClose + 1];
      renderPodcastFrom(frequencias[indexClose + 1]);
    }
  } else {
    inputFrequency.value = frequencias[0];
    inputRange.value = frequencias[0];
    renderPodcastFrom(frequencias[0]);
  }
}