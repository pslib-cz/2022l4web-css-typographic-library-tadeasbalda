 // Darkmode switch:
 const toggleSwitch = document.querySelector('.darkmode__switch input[type="checkbox"]');
 const currentTheme = localStorage.getItem('theme');

 if (currentTheme) {
     document.documentElement.setAttribute('data-theme', currentTheme);

     if (currentTheme === 'dark') {
         toggleSwitch.checked = true;
     }
 }

 function switchTheme(e) {
     if (e.target.checked) {
         document.documentElement.setAttribute('data-theme', 'dark');
         localStorage.setItem('theme', 'dark');
     } else {
         document.documentElement.setAttribute('data-theme', 'light');
         localStorage.setItem('theme', 'light');
     }
 }

 toggleSwitch.addEventListener('change', switchTheme, false);
 // Hamburger menu:
 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".navbar__menu");

 hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 })
 document.querySelectorAll(".menu__item").forEach(n => n.addEventListener("click", () => {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
 }))
 AOS.init();