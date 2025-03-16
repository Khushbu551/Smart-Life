export function setupGrowthPath() {
  // Good Habits Reset btn
  document
    .getElementById("resetGoodHabits")
    .addEventListener("click", function () {
      localStorage.removeItem("goodHabits");
      document.getElementById("goodHabits").value = "";
      alert("Good Habits cleared!");
    });

  // Good Habits Reset btn
  document
    .getElementById("resetBadHabits")
    .addEventListener("click", function () {
      localStorage.removeItem("badHabits");
      document.getElementById("badHabits").value = "";
      alert("Habits to Change cleared!");
    });
}

// Selecting element
const goodHabitsInput = document.getElementById("goodHabits");
const saveGoodHabitsBtn = document.getElementById("saveGoodHabits");

const badHabitsInput = document.getElementById("badHabits");
const saveBadHabitsBtn = document.getElementById("saveBadHabits");

// Function to save data in localstorage
function loadData() {
  const saveGoodHabits = JSON.parse(localStorage.getItem("goodHabits")) || [];
  console.log("Loaded Good Habits:", saveGoodHabits);
  const saveBadHabits = JSON.parse(localStorage.getItem("badHabits")) || [];
  console.log("Loaded Bood Habits:", saveBadHabits);

  goodHabitsInput.value = saveGoodHabits.join("\n"); // display as  list
  badHabitsInput.value = saveBadHabits.join("\n");
}

// Function to load saved data form localstorage
function saveData() {
  const goodHabitsList = goodHabitsInput.value
    .split("\n")
    .map((habit) => habit.trim())
    .filter((habit) => habit !== "");
  const badHabitsList = badHabitsInput.value
    .split("\n")
    .map((habit) => habit.trim())
    .filter((habit) => habit !== "");

  localStorage.setItem("goodHabits", JSON.stringify(goodHabitsList));
  localStorage.setItem("badHabits", JSON.stringify(badHabitsList));
}
// Event listeners for saving data
saveGoodHabitsBtn.addEventListener("click", saveData);
saveBadHabitsBtn.addEventListener("click", saveData);

// Auto save when user type
saveGoodHabitsBtn.addEventListener("input", saveData);
saveBadHabitsBtn.addEventListener("input", saveData);

// LOad data when page loads
window.addEventListener("load", loadData);
