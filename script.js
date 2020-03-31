window.onload = function () {
    document.getElementById("photos-button").addEventListener("click",switchTab);
    document.getElementById("about-button").addEventListener("click",switchTab);
    document.getElementById("photos").addEventListener("click",openPOPUP);
    document.getElementById("close").addEventListener("click",closePOPUP);
};

function switchTab(event) {
    let next = event.target.nextElementSibling;
    if(next !== null)
        next.classList.remove("button-active");
    else
        event.target.previousElementSibling.classList.remove("button-active");
    event.target.classList.add("button-active");
    if(event.target.id === "about-button") {
        document.getElementById("about").classList.add("visible");
        document.getElementById("photos").classList.remove("visible");
    }
    else {
        document.getElementById("photos").classList.add("visible");
        document.getElementById("about").classList.remove("visible");
    }
}

function openPOPUP(event) {
    if(event.target.tagName!=="IMG") return;
    let id = event.target.parentElement.id;
    let num = id.split("_")[1];
    let popup = document.getElementById("popup-container");
    popup.style.display="flex";
    let image = document.querySelector(".popup img");
    image.src= "img/PUPImg"+num+".jpg";
}

function closePOPUP() {
    document.getElementById("popup-container").style.display="none";
}