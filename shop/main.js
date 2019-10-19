const tableCells = document.querySelectorAll("td");
function handleMouseOver(event) {
    event.firstElementChild.style.display = "none";
    event.firstElementChild.nextElementSibling.style.display = "block";
}
function handleMouseOut(event) {
    event.firstElementChild.nextElementSibling.style.display = "none";
    event.firstElementChild.style.display = "block";
}

tableCells.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.style.border = "hidden";
  });
});

tableCells.forEach((element) => {
    element.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.border = "";
    })
})