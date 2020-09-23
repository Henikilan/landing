const entities = [
  {
    img: "img/image3.png",
  },
  {
    img: "img/sochi.jpg",
  },
  {
    img: "img/rostov.jpg",
  },
];
const img = document.getElementById("photo");
const themes = document.getElementById("themes");
const dots = document.getElementById("rounds");

const setEntity = (index) => {
  img.src = entities[index].img;
  themes.querySelector(".active").classList.remove("active");
  themes.querySelectorAll("li")[index].classList.add("active");
  dots.querySelector(".active").classList.remove("active");
  dots.querySelectorAll("div")[index].classList.add("active");
};

themes.querySelectorAll("li").forEach((el, index) => {
  el.addEventListener("click", () => {
    setEntity(index);
  });
});

dots.querySelectorAll("div").forEach((el, index) => {
  el.addEventListener("click", () => {
    setEntity(index);
  });
});

const left = document.getElementById("left");
const right = document.getElementById("right");
let currentIndex = 0;

left.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = entities.length - 1;
  } else {
    currentIndex -= 1;
  }
  setEntity(currentIndex);
});
right.addEventListener("click", () => {
  if (currentIndex >= entities.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setEntity(currentIndex);
});
