var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const sedan = document.querySelector(".sedan");
const suv = document.querySelector(".suv");

const sedanStyle = document.querySelector(".sedan-box");
const suvStyle = document.querySelector(".suv-box");

function showsedan() {
  sedan.style.display = "block";
  suv.style.display = "none";
  sedanStyle.style.backgroundColor = "red";
  suvStyle.style.backgroundColor = "#112240";
}

function showsuv() {
  suv.style.display = "block";
  sedan.style.display = "none";
  sedanStyle.style.backgroundColor = "#112240";
  suvStyle.style.backgroundColor = "red";
}
function goToDetails(carId) {
  window.location.href = `details.html?car=${carId}`;
}
