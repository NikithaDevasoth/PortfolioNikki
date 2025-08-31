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