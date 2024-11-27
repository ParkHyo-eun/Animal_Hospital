const outer = document.querySelector(".GalleryOut");
const innerList = document.querySelector(".GalleryIList");
const inners = document.querySelectorAll(".GalleryI");
let currentIndex = 0;

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`;
});

innerList.style.width = `${outer.clientWidth * inners.length}px`;

const buttonLeft = document.querySelector(".GalleryLeft");
const buttonRight = document.querySelector(".GalleryRight");

buttonLeft.addEventListener("click", () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex;
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
});

buttonRight.addEventListener("click", () => {
  currentIndex++;
  currentIndex =
    currentIndex >= inners.length ? inners.length - 1 : currentIndex;
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
});
