let hunger = 50;
let happiness = 50;
let health = 100;

const pet = document.getElementById("pet");
const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const healthBar = document.getElementById("health-bar");

function updatePet() {
  hunger = Math.max(0, Math.min(100, hunger));
  happiness = Math.max(0, Math.min(100, happiness));
  health = Math.max(0, Math.min(100, health));

  hungerBar.style.width = hunger + "%";
  happinessBar.style.width = happiness + "%";
  healthBar.style.width = health + "%";

  if (hunger < 30 || happiness < 30 || health < 30) {
    pet.textContent = "😢";
  } else if (hunger > 70 && happiness > 70 && health > 70) {
    pet.textContent = "😄";
  } else {
    pet.textContent = "😐";
  }
}

function feedPet() {
  hunger += 15;
  health += 5; // Alimentar também melhora a saúde
  updatePet();
}

function playWithPet() {
  happiness += 15;
  hunger -= 5;
  health -= 2; // Brincar diminui um pouco a saúde
  updatePet();
}

function sleepPet() {
  happiness += 10;
  hunger -= 10;
  health += 5; // Dormir melhora a saúde
  updatePet();
}

setInterval(() => {
  hunger -= 2;
  happiness -= 2;
  health -= 1; // A saúde diminui com o tempo se não for cuidada
  updatePet();
}, 3000);

updatePet();
