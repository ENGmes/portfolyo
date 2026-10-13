

const hamburger = document.getElementById("hamburger");

const menu = document.querySelector(".menu");

const overlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", function () {

    menu.classList.toggle("active");
    overlay.classList.toggle("active");

});

const skillsTrack = document.querySelector(".skills-track");

skillsTrack.innerHTML += skillsTrack.innerHTML;


const menuLinks = document.querySelectorAll(".menu .madde");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");
        hamburger.classList.remove("active");
        overlay.classList.remove("active");

    });

});


