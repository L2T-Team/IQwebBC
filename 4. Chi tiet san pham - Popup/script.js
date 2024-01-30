var showroom_mienbac_btn = document.getElementById("showroom_mienbac_btn");
var showroom_mientrung_btn = document.getElementById("showroom_mientrung_btn");
var showroom_miennam_btn = document.getElementById("showroom_miennam_btn");
var imageProduct = document.getElementById("imageProduct");


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

imageProduct.addEventListener("click", function () {
    openPopup();
})

function openPopup() {
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

function changeTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(function(tabContent) {
      tabContent.style.display = 'none';
    });

    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab').forEach(function(tab) {
      tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add 'active' class to the clicked tab
    document.getElementById(tabId + "_btn").classList.add('active');
  }
