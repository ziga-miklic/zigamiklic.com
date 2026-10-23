"use strict";

/* Theme select */

function setThemeCookie(value) {
  const expires = new Date();
  const FIVE_YEARS = 5 * 365 * 24 * 60 * 60 * 1000;
  expires.setTime(expires.getTime() + FIVE_YEARS);

  document.cookie = `zm-theme=${value}; expires=${expires.toUTCString()}; path=/`;
}

function toggleTheme(e) {
  e.preventDefault();

  const root = document.documentElement;
  const themeLightName = "theme--light";
  const themeDarkName = "theme--dark";

  if (root.classList.contains(themeLightName)) {
    root.classList.remove(themeLightName);
    root.classList.add(themeDarkName);
    setThemeCookie("dark");
  } else {
    root.classList.remove(themeDarkName);
    root.classList.add(themeLightName);
    setThemeCookie("light");
  }
}

document.querySelector("#theme-switch").addEventListener("click", toggleTheme);
