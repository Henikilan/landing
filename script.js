const entities = [
  {
    img: "img/image3.png",
    city: "Rostov-on-don<br>LCD admiral",
    time: "3.5 months",
    area: "81 m2",
  },
  {
    img: "img/sochi.jpg",
    city: "Sochi<br>Thieves",
    time: "4 months",
    area: "105 m2",
  },
  {
    img: "img/rostov.jpg",
    city: "Rostov-on-don<br>Patriotic",
    time: "3 months",
    area: "93 m2",
  },
];
const $img = document.getElementById("photo");
const $themes = document.getElementById("themes");
const $dots = document.getElementById("rounds");
const $city = document.getElementById("city");
const $time = document.getElementById("time");
const $area = document.getElementById("area");

const setEntity = (index) => {
  const entity = entities[index];
  $img.src = entity.img;
  $city.innerHTML = entity.city;
  $time.innerHTML = entity.time;
  $area.innerHTML = entity.area;

  $themes.querySelector(".active").classList.remove("active");
  $themes.querySelectorAll("li")[index].classList.add("active");
  $dots.querySelector(".active").classList.remove("active");
  $dots.querySelectorAll("div")[index].classList.add("active");
};

$themes.querySelectorAll("li").forEach((el, index) => {
  el.addEventListener("click", () => {
    setEntity(index);
  });
});

$dots.querySelectorAll("div").forEach((el, index) => {
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
