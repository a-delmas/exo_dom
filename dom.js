// var containerElement = document.getElementById("container");
// containerElement.style.backgroundColor = "red";
// containerElement.style.color = "white";
// containerElement.className = "plop";

var text1Element = document.getElementsByClassName("text1") [0];
text1Element.innerHTML = "plop plop plop plop plop";
text1Element.style.color = "blue";

var liElements = document.getElementsByTagName("li");
for (let i = 0; i = liElements.length; i ++) {
    liElements[i].style.fontWeight = "bold";
}

containerElement.style.width = "";
console.log(document.getElementsById("container"));
console.log(document.getElementsByClassName("text1"));
console.log(document.getElementsByTagName("li"));

var containerElement = document.getElementById("container");

var h1Element = document.createElement("h1");
h1Element.innerHTML = "Mon Super PLOP Titre";
containerElement.prepend(h1Element);

var h2Element = document.createElement("h2");
h2Element.innerHTML = "Mon Super PLOP SousTitre";
h1Element.after(h2Element);

var btnElement = document.getElementById("btn");

btnElement.addEventListener("mouseover"), funtion() {
    alert("PLOP");
});