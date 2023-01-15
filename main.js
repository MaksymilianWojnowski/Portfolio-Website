const hamburger = document.querySelector(".hamburger-menu-icon");
const mobile_menu = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
const hideMenu = () =>{
  mobile_menu.classList.toggle("is-active");
  hamburger.classList.toggle("is-active");
}
const about = document.getElementById("about");
const home = document.getElementById("home");
const projects = document.getElementById("projects");
const openAbout = () => {
  about.style.display = "flex";
  about.style.top = 0;
  home.style.display = "none";
  home.style.top = "100%";
  projects.style.display = "none";
  projects.style.top = "100%";
}
const openHome = () => {
  home.style.display = "flex";
  home.style.top = 0;
  about.style.display = "none";
  about.style.top = "100%";
  projects.style.display = "none";
  projects.style.top = "100%";
}
const openProjects = () =>{
  projects.style.display = "flex";
  projects.style.top = 0;
  about.style.display = "none";
  about.style.top = "100%";
  home.style.display = "none";
  home.style.top = "100%";
}

const theme = document.getElementById('theme');
theme.addEventListener("click", function(){
  theme.classList.toggle('checked');
  themeMobile.classList.toggle('checked');
})
const themeMobile = document.getElementById('theme-mobile');
themeMobile.addEventListener("click", function(){
  theme.classList.toggle('checked');
  themeMobile.classList.toggle('checked');
})



const tablinks = document.getElementsByClassName('tab-links');
const tabs = document.getElementsByClassName('tab');

const opentab = tabname => {
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tab of tabs){
      tab.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


