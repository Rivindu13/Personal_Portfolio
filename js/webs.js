// Array of website details
const websites = [
    { name: "TuneHub", img: "./images/apps/th.png", url: "https://rivindu13.github.io/TuneHub/" },
    { name: "Diabeties Predictor", img: "./images/apps/dbp.png", url: "https://github.com/Rivindu13/Diabetes-prediction.git" },
    { name: "Slide Puzzle", img: "./images/apps/sp.png", url: "https://github.com/Rivindu13/Slide-Puzzle.git" },
    { name: "Employability Predictor", img: "./images/apps/emp.png", url: "https://github.com/Rivindu13/Graduate-Employability-Predictor.git" },
    { name: "ToDo App", img: "./images/apps/todo.jpg", url: "https://github.com/Rivindu13/ToDoApp_mad.git" },
    { name: "Germ Killer", img: "./images/apps/germ.png", url: "https://github.com/Rivindu13/GermKiller_MobileGame.git" },
    { name: "MusicHive", img: "./images/apps/mh.jpg", url: "https://github.com/Rivindu13/MusicHive.git" },
    { name: "Lingo Camp", img: "./images/apps/lin.png", url: "https://github.com/MaleeshaAluwihare/LingoCamp.git" },
    { name: "J'pura Leos", img: "./images/apps/jpura.png", url: "https://japuraleo.github.io/org.lk/" }
];
          
// Generate and insert website items dynamically
document.getElementById("websitesList").innerHTML = websites
    .map(website => `
    <div class="website-item">
    
    <img src="${website.img}" alt="${website.name}" />
    <h2>${website.name}</h2>
    <a href="${website.url}" target="_blank" class="view-btn">View More
    </a>
    </div>
    `)
.join("");