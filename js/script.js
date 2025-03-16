import { setupNavigation } from "./nav.js";
setupNavigation();

import { getFakeAdvice, getFakeMotivationalQuote } from "./mindFlow.js";

import { setupGrowthPath } from "./growthPath.js";
setupGrowthPath();

import { setupTodoList } from "./todo.js";
setupTodoList();

// Event Listener for Decision Advisor btn
document
  .querySelector(".mindflow-card.left .btn")
  .addEventListener("click", getFakeAdvice);

// Event Listener for Mood Booster Button
document
  .querySelector(".mindflow-card.right .btn")
  .addEventListener("click", getFakeMotivationalQuote);
