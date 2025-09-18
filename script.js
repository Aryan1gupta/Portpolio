document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out, Shreyansh! 🚀");
});


 const titles = [
      "MERN Stack Developer",
      "Machine Learning Engineer",
      "Software Engineer"
    ];

    let index = 0;
    const textElement = document.getElementById("changing-text");

    setInterval(() => {
      index = (index + 1) % titles.length;
      textElement.textContent = titles[index];

      // Add fade-in effect each time
      textElement.style.animation = "none";
      textElement.offsetHeight; // trigger reflow
      textElement.style.animation = "fadeIn 1s ease-in-out";
    }, 2500);