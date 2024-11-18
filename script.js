document.addEventListener("DOMContentLoaded", () => {
  // Add an event listener for user interaction or dynamic customization
  console.log("Mermaid chart rendered successfully!");

  // Example: Highlight a node when clicked
  document.querySelector(".chart").addEventListener("click", (e) => {
      if (e.target.tagName === "text") {
          const node = e.target;
          node.setAttribute("fill", "red");
          setTimeout(() => node.setAttribute("fill", ""), 2000);
      }
  });
});
