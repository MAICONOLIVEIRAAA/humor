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
}
