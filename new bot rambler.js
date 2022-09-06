// ==UserScript==
// @name         rambler 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  for rambler
// @author       Aleksander Scvortsov
// @match        https://r0.ru/*
// @icon         [eq
// @grant        none
// ==/UserScript==

let links = document.links;
let rui = document.getElementsByClassName("rui__K3edI rui__3Mzuh")[0];
let keywords = ["10 известных фильмов Голливуда","10 известных актеров Голливуда","онлайн-кинотеатр"];
let keyword = keywords[getRandom(0, keywords.length)];

if (rui !== undefined) {
     document.getElementsByName("query")[0].value = keyword;
     rui.click();
} else {

for (let i=0; i<links.length; i++) {
     if (links[i].href.indexOf("okko.tv") !== -1) {
          console.log("Нашел строку" + links[i]);
          let link = links[i];
          link.click();
          break;
    }
  }
}
function getRandom(min, max) {
     return Math.floor(Math.random()*(max-min)+min);
}
