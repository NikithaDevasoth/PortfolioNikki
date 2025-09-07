var typed = new Typed(".text", {
  strings: [
    '<span class="role1">Frontend Developer</span>',
    '<span class="role2">Web Developer</span>'
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});



// Animate radial bars for professional skills
const circles = document.querySelectorAll('.radial-bars .path-1');
const percentages = [90, 70, 75, 80, 90]; // as per your HTML

circles.forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  // Calculate offset based on percentage
  const offset = circumference - (percentages[index] / 100) * circumference;

  // Animate stroke dashoffset
  setTimeout(() => {
    circle.style.transition = 'stroke-dashoffset 1.5s ease';
    circle.style.strokeDashoffset = offset;
  }, 300);
});
// document.querySelector('.common-btn').addEventListener('click', function() {
//   alert('Thank you for your interest! Please contact me at devasothnikitha85@example.com');
// });
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const res = await fetch("https://backendportfolio-ngmv.onrender.com", {  // later replace with your deployed backend URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const data = await res.json();
    document.getElementById("responseMsg").innerText = data.message;
});
//ABOUT
function wrapLines(element) {
    const text = element.innerText;
    element.innerHTML = "";
    const words = text.split(" ");
    let line = document.createElement("span");
    line.className = "line";
    element.appendChild(line);

    words.forEach((word) => {
        const testLine = line.cloneNode();
        testLine.innerText = line.innerText + (line.innerText ? " " : "") + word;
        element.appendChild(testLine);

        const originalHeight = element.clientHeight;
        line.innerText += (line.innerText ? " " : "") + word;
        const newHeight = element.clientHeight;

        if (newHeight > originalHeight) {
            line.innerText = line.innerText.replace(" " + word, "");
            line = document.createElement("span");
            line.className = "line";
            line.innerText = word;
            element.appendChild(line);
        }
    });
}

const paragraph = document.getElementById("about-paragraph");
wrapLines(paragraph);

const lines = document.querySelectorAll("#about-paragraph .line");

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                lines.forEach((line, index) => {
                    line.style.animationDelay = `${index * 0.25}s`; // smooth stagger
                    line.style.animationPlayState = "running";
                });
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

observer.observe(document.getElementById("about"));
