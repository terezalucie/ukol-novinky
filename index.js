//Novinky

const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

const newsElement = document.querySelector(".news")
newsElement.style.width = "60rem"
newsElement.style.backgroundColor = "white"

const nadpis = document.querySelector("h1")

nadpis.classList.add("news__title")
nadpis.textContent = "Aktuální novinky"

const prvniZprava = document.querySelector("#zprava1")
prvniZprava.classList.add("post--main")

const obrazek = document.querySelector("#zprava3 img")
obrazek.src = "images/zprava3-novy.jpg"