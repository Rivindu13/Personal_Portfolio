// Array of skills with image paths
const skills = [
    { name: "HTML", img: "./images/skills/html.png" },
    { name: "CSS", img: "./images/skills/css.png" },
    { name: "JavaScript", img: "./images/skills/js.png" },
    { name: "Php", img: "./images/skills/php.png" },
    { name: "Java", img: "./images/skills/java.png" },
    { name: "Python", img: "./images/skills/python.png" },
    { name: "C", img: "./images/skills/c.png" },
    { name: "C++", img: "./images/skills/c++.png" },
    { name: "React JS", img: "./images/skills/react.png" },
    { name: "Tailwind CSS", img: "./images/skills/tcss.png" },
    { name: "MySQL", img: "./images/skills/mysql.png" },
    { name: "MongoDB", img: "./images/skills/mdb.png" }
];
          
// Generate and insert skill items using map()
document.getElementById("skillsList").innerHTML = skills.map(skill => `
    <div class="website-item">
    <img src="${skill.img}" alt="${skill.name}" />
    <h2>${skill.name}</h2>
    </div>
    `)
.join("");