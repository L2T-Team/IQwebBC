let isExpand = false;
const btn = document.querySelector("#xem-them-bai-viet");
const content = document.querySelector(".mt_sp");
const bg = document.querySelector(".bg-article");

btn.addEventListener("click", function () {
  if (!isExpand) {
    content.style = "height: auto; overflow: hidden";
    bg.style = "display: none";
    btn.innerHTML = "Thu gọn";
  } else {
    content.style = "height: 150px; overflow: hidden";
    bg.style = "display: block";
    btn.innerHTML = "Xem thêm";
  }
  isExpand = !isExpand;
});
