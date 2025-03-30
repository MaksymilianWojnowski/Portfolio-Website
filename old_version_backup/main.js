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
const contacts = document.getElementById("contacts");
const openAbout = () => {
  about.style.display = "flex";
  about.style.top = 0;
  home.style.display = "none";
  home.style.top = "100%";
  projects.style.display = "none";
  projects.style.top = "100%";
  contacts.style.display = "none";
  contacts.style.top = "100%";
}
const openHome = () => {
  home.style.display = "flex";
  home.style.top = 0;
  about.style.display = "none";
  about.style.top = "100%";
  projects.style.display = "none";
  projects.style.top = "100%";
  contacts.style.display = "none";
  contacts.style.top = "100%";
}
const openProjects = () =>{
  projects.style.display = "flex";
  projects.style.top = 0;
  about.style.display = "none";
  about.style.top = "100%";
  home.style.display = "none";
  home.style.top = "100%";
  contacts.style.display = "none";
  contacts.style.top = "100%";
}

const openContacts = () =>{
  contacts.style.display = "flex";
  contacts.style.top = 0;
  projects.style.display = "none";
  projects.style.top = "100%";
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


const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("linkedin");
enhance("github");
