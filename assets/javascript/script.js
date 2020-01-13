const hamburger = document.querySelector("#hamburger");
const icon = document.querySelector("#icon");
const iconSpotify = document.querySelector("#icon-spotify");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll("menu ul li");
const navItems = document.querySelectorAll("nav ul li");
const swipeDown = document.querySelector("#swipeDown");
const toAnimate = document.querySelectorAll(".toAnimate");

function newItemIsActive(newItem) {
  navItems.forEach(element => {
    if (element.classList.contains("nav-item-is-active")) {
      element.classList.remove("nav-item-is-active");
    }
  });
  newItem.classList.add("nav-item-is-active");
}

// HAMBURGER MENU
icon.addEventListener("click", () => {
  hamburger.classList.toggle("menu-opened");
  iconSpotify.classList.toggle("hidden");
  menu.classList.toggle("menu-grow");
});

menuItems.forEach(element => {
  element.addEventListener("click", () => {
    hamburger.classList.toggle("menu-opened");
    iconSpotify.classList.toggle("hidden");
    menu.classList.toggle("menu-grow");
  });
});

// NAV ACTIVE ITEM
const ids = ["hero", "product", "feature", "pre-order"];

// --> triggered by waypoint
for (let i = 0; i < ids.length; i++) {
  let id = ids[i];
  let element = document.getElementById(id);
  let offset = i === 0 ? "-50%" : "30%"; // offset de -50% pour le premier
  let waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      newItemIsActive(navItems[i]);
    },
    offset: offset
  });
}

// --> triggered by click

navItems.forEach(element => {
  element.addEventListener("click", () => {
    console.log(element);
    newItemIsActive(element);
  });
});

// SWIPE DOWN ARROW

window.addEventListener("scroll", () => {
  swipeDown.classList.add("hidden");
  swipeDown.classList.remove("swipe-down");
});

// MOVE IN ON SCROLL

toAnimate.forEach(element => {
  let waypoint = new Waypoint({
    element: element,
    handler: function() {
      element.classList.remove("toAnimate");
      element.classList.add("moveInLeft");
    },
    offset: "60%"
  });
});

console.log(toAnimate);
