export function setupNavigation() {
  const navLinks = document.querySelectorAll("[data-section]");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Stop reload page
      let sectionId = this.getAttribute("data-section").toLowerCase();

      if (!sectionId) return;
      console.log("Navigating to:", sectionId); // Debugging

      document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
        section.classList.remove("active");
      });

      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.style.display = "block";
        targetSection.classList.add("active");
        console.log("sectionfound:", targetSection); // debugging
      } else {
        console.log("Error: section not found -", sectionId);
      }
    });
  });
}
