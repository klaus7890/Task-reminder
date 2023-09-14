const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")
function animepahe(){
    if(inputbox.value === ''){
        alert("write something");
    }
    else{
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

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(target.tagName === "SPAN"){
        e.target.paretElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}