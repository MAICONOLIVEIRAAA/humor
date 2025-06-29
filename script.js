let moodLevel = 0; // 0 = Neutro, -1 = Triste, 1 = Feliz
let moodHistory = [];

// Função para alterar o humor do pet
function setMood(mood) {
  const pet = document.getElementById('pet');
  const moodText = document.getElementById('mood-text');

  switch (mood) {
    case 'feliz':
      pet.innerText = '😊';
      moodText.innerText = "Você está se sentindo muito feliz hoje!";
      break;
    case 'alegre':
      pet.innerText = '😁';
      moodText.innerText = "Você está se sentindo alegre hoje!";
      break;
    case 'neutro':
      pet.innerText = '😐';
      moodText.innerText = "Você está se sentindo neutro hoje.";
      break;
    case 'bravo':
      pet.innerText = '😡';
      moodText.innerText = "Você está se sentindo bravo hoje.";
      break;
    case 'triste':
      pet.innerText = '😔';
      moodText.innerText = "Você está se sentindo triste hoje.";
      break;
    default:
      pet.innerText = '😐';
      moodText.innerText = "Escolha um humor para o seu pet!";
  }

  // Salvar histórico
  saveMoodToHistory(moodText.innerText);
}

// Função para ajustar a intensidade do humor
function adjustMood(action) {
  const pet = document.getElementById('pet');
  const moodText = document.getElementById('mood-text');

  if (action === 'aumentar') {
    moodLevel++;
  } else if (action === 'diminuir') {
    moodLevel--;
  }

  if (moodLevel > 1) moodLevel = 1;  // Limite para "Feliz"
  if (moodLevel < -1) moodLevel = -1;  // Limite para "Triste"

  switch (moodLevel) {
    case 1:
      pet.innerText = '😁';
      moodText.innerText = "Você está super feliz!";
      break;
    case 0:
      pet.innerText = '😐';
      moodText.innerText = "Você está neutro hoje.";
      break;
    case -1:
      pet.innerText = '😔';
      moodText.innerText = "Você está um pouco triste...";
      break;
  }

  // Salvar histórico
  saveMoodToHistory(moodText.innerText);
}

// Função para salvar histórico de humores
function saveMoodToHistory(mood) {
  moodHistory.push(mood);
  if (moodHistory.length > 5) {
    moodHistory.shift();  // Limita o histórico a 5 entradas
  }
  updateMoodHistory();
}

// Atualiza o histórico de humores
function updateMoodHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = "";
  moodHistory.forEach(mood => {
    const listItem = document.createElement('li');
    listItem.textContent = mood;
    historyList.appendChild(listItem);
  });
}

// Função para mudar o pet
function changePet(petType) {
  const pet = document.getElementById('pet');
  switch (petType) {
    case 'gato':
      pet.innerText = '🐱';
      break;
    case 'cachorro':
      pet.innerText = '🐶';
      break;
    case 'alien':
      pet.innerText = '👽';
      break;
  }
}

// Alternar entre modo noite e modo dia
function toggleNightMode() {
  const body = document.getElementById('game-container');
  body.classList.toggle('night-mode');
}
