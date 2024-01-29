var showroom_mienbac_btn = document.getElementById("showroom_mienbac_btn");
var showroom_mientrung_btn = document.getElementById("showroom_mientrung_btn");
var showroom_miennam_btn = document.getElementById("showroom_miennam_btn");

function setDefaultDisplay(id, display) {
    let showroom = document.getElementById(id);
    showroom.style.display = display;
    let showroom_btn = document.getElementById(id + "_btn");
    if (display === "block") {
        showroom_btn.classList.remove("disabled");
    } else {
        showroom_btn.classList.add("disabled");
    }
}

function handleClick(id) {
    let showroom = document.getElementById(id);
    let showroom_btn = document.getElementById(id + "_btn");
    console.log(showroom_btn.classList);
    if (showroom.style.display === "none") {
        showroom.style.display = "block";
        showroom_btn.classList.remove("disabled");
    } else {
        showroom.style.display = "none";
        showroom_btn.classList.add("disabled");
    }
}

setDefaultDisplay("showroom_mienbac", "block");
setDefaultDisplay("showroom_mientrung", "none");
setDefaultDisplay("showroom_miennam", "none");

showroom_mienbac_btn.addEventListener("click", function () {
    handleClick("showroom_mienbac");
})
showroom_mientrung_btn.addEventListener("click", function () {
    handleClick("showroom_mientrung");
})
showroom_miennam_btn.addEventListener("click", function () {
    handleClick("showroom_miennam");
})
