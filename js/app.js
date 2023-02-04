"use strict";

const navLink = document.getElementsByClassName("menu-item-has-children");
const dropDownMenu = document.getElementsByClassName("drop-down");
const closeBtn = document.getElementsByClassName("close");

// On hover of top nav items, toggle card visibility.
for (let i = 0; i < navLink.length; i++) {
  // Grab specific ID that each mega menu has
  const menuId = document.querySelector(`#${dropDownMenu[i].id}`);
  // Toggle mega menu on hover of top nav link
  navLink[i].addEventListener("mouseover", () => {
    for (let i = 0; i < navLink.length; i++) {
      document
        .querySelector(`#${dropDownMenu[i].id}`)
        .classList.remove("display-on");
    }
    menuId.classList.toggle("display-on");
  });
}

// On mouseleave of mega menu items, close the menu.
for (const iteration of dropDownMenu) {
  iteration.addEventListener("mouseleave", (e) => {
    return e.target.contains(iteration)
      ? document.querySelector(".display-on").classList.remove("display-on")
      : "";
  });
}

// On hover of promotion / search icons, hide mega menu items
const promoNavLink = document.getElementById("promotions");
const searchNavLink = document.getElementById("search-icon");

promoNavLink.addEventListener("mouseover", (e) => {
  document.querySelector(".display-on").classList.remove("display-on");
});

searchNavLink.addEventListener("mouseover", (e) => {
  document.querySelector(".display-on").classList.remove("display-on");
});

// document.addEventListener("mouseover", (e) => {
//   return e.target.contains(promoNavLink || searchNavLink)
//     ? document.querySelector(".display-on").classList.remove("display-on")
//     : "";
// });

// On click of any Close buttons, close the menu.
// for (const iteration of closeBtn) {
//   // Close menu
//   iteration.addEventListener("click", () => {
//     document.querySelector(".display-on").classList.remove("display-on");
//   });
// }
