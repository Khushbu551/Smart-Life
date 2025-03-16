// Decision Advisor Functionality using JSONPlaceholder API (Temporary)

export async function getFakeAdvice() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    //Html show element
    const adviceElement = document.querySelector(".mindflow-card.left p");

    // Show title like advice
    adviceElement.textContent = `"${data.title}"`;
  } catch (error) {
    console.error(" in API call error:", error);
  }
}

//Mood Booster Functionality usinf Quotable API
export async function getFakeMotivationalQuote() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const data = await response.json();

    //Html show element
    const adviceElement = document.querySelector(".mindflow-card.right p");

    // Show title like advice
    adviceElement.textContent = `"${data.title}" - Unknown`;
  } catch (error) {
    console.error(" in API call error:", error);
  }
}
