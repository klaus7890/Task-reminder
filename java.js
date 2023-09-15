const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function animepahe() {
    if (inputbox.value === "") {
        alert("Write something.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") { // Corrected 'target' to 'e.target'
        e.target.parentElement.remove(); // Corrected 'paretElement' to 'parentElement'
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
