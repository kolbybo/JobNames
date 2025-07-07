//get html elements
const btn = document.getElementById("btn");
const restartbtn = document.querySelector(".redobtn");
const formScreen = document.querySelector(".container");
const resultScreen = document.querySelector(".resultScreen");
const jobNameText = document.getElementById("name");
const scope = document.getElementById("scope");
const facilityName = document.getElementById("facilityName");
const scopeResultText = document.getElementById("facilityScope");
const facilityResultText = document.getElementById("facilityResult");
const greeting = document.querySelector('.greeting')
const userName = document.getElementById("userName");

btn.addEventListener("click", createJobName);
function createJobName() {
  facilityName.value;
  scope.value;
  userName.style.color = 'red';
  formScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  jobNameText.textContent = `${facilityName.value}${scope.value}`;
  scopeResultText.textContent = scope.options[scope.selectedIndex].text;
  facilityResultText.textContent = facilityName.value
  greeting.textContent = userName.value
}

restartbtn.addEventListener("click", redoForm);
function redoForm() {
  document.getElementById("jobNames").reset();
  document.querySelector(".resultScreen").classList.add("hidden");
  document.querySelector(".container").classList.remove("hidden");
}
