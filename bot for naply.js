// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot for google
// @author       Aleksander Scvortsov
// @match        https://www.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let links = document.links;
let btnK = document.getElementsByName("BtnK")[0];
let keywords = ["ispring.ru","проработанный сценарий для урока","Как написать сценарий электронного курса","как писать сценарий к уроку"];
let keyword = keywords[getRandom(0, keywords.length)];

if(btnK !== undefined) {
     document.getElementsByName("q")[0].value = keyword;
     btnK.click();
} else {

for(let i=0; i<links.length; i++) {
     if(links[i].href.indexOf("ispring.ru")!== -1){
          console.log("Нашел строку"+ links[i]);
          let link = links[i];
          link.click();
          break;
     }
}
}
function getRandom(min, max){
return Math.floor(Math.random()*(max - min)+ min);
}
