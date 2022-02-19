document.getElementById("source").innerHTML="https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html"
document.getElementById("source").style.fontWeight = "bold";

var words = document.getElementById("text").innerHTML;
var numbers = words.match(/(\w+)/g).length;
document.getElementById("number").innerHTML = numbers;

let badText = document.getElementById("text").innerHTML;
let goodText = badText.replaceAll("?", "🤔");
let bestText = goodText.replaceAll("!", "😯");
let longText = document.getElementById("text").innerHTML;
window.onload = function() {
  const check = word => {
    if (word.length > 8) {
      return '<span class="hightlight">' + word + '</span>'
    } else {
      return word
    }
  }
 const sample = document.querySelector("#text")
  sample.innerHTML = sample
    .innerText
    .trim()
    .split(' ')
    .map(check)
    .join(' ')
}