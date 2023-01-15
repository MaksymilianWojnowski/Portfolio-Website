const hamburger = document.querySelector(".hamburger-menu-icon");
const mobile_menu = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

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