/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".org"];
  for (let i = 0; i < pronoun.length; i++) {
    const pronombre = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      const adjetivo = adj[j];
      for (let k = 0; k < noun.length; k++) {
        const sustantivo = noun[k];
        for (let m = 0; m < extension.length; m++) {
          const final = extension[m];
          console.log(pronombre + adjetivo + sustantivo + final);
        }
      }
    }
  }
};
