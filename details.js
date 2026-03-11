const carData = {
  grande: {
    name: "Toyota Altis Grande",
    price: "6,799,000",
    img1: "./images/grande-1.jpg",
    img2: "./images/grande-2.jpg",
    img3: "./images/grande-3.jpg",
    img4: "./images/grande-4.jpg",
    desc: "Experience the perfect blend of luxury and power with the Altis Grande.",
    specs: ["1.8L Engine", "CVT-i Transmission", "Sunroof", "Cruise Control"],
  },
  lc300: {
    name: "Land Cruiser 300",
    price: "63,099,000",
    img1: "./images/lc300-1.jpg",
    img2: "./images/lc300-2.jpg",
    img3: "./images/lc300-3.jpg",
    img4: "./images/lc300-4.jpg",
    desc: "The King of all Terrains. Unmatched prestige and off-road capability.",
    specs: ["3.5L Twin Turbo V6", "10-Speed AT", "4WD", "Multi-Terrain Select"],
  },

  camry: {
    name: "Toyota Camry",
    price: "55,99,000",
    img1: "./images/camry-1.jpg",
    img2: "./images/camry-2.jpg",
    img3: "./images/camry-3.jpg",
    img4: "./images/camry-4.jpg",
    desc: "The King of all Terrains. Unmatched prestige and off-road capability.",
    specs: ["3.5L Twin Turbo V6", "10-Speed AT", "4WD", "Multi-Terrain Select"],
  },

  yaris: {
    name: "Toyota Yaris",
    price: "46,09,000",
    img1: "./images/yaris-1.jpg",
    img2: "./images/yaris-2.jpg",
    img3: "./images/yaris-3.jpg",
    img4: "./images/yaris-4.jpg",
    desc: "The King of all Terrains. Unmatched prestige and off-road capability.",
    specs: ["1.6L Twin Turbo ", "10-Speed AT", "4WD", "Multi-Terrain Select"],
  },

  fortuner: {
    name: "Toyota Fortuner",
    price: "13,099,000",
    img1: "./images/fortuner-1.png",
    img2: "./images/fortuner-2.png",
    img3: "./images/fortuner-3.png",
    img4: "./images/fortuner-4.jpg",
    desc: "The King of all Terrains. Unmatched prestige and off-road capability.",
    specs: ["3.5L Twin Turbo V6", "10-Speed AT", "4WD", "Multi-Terrain Select"],
  },

  revo: {
    name: "Toyota Revo",
    price: "12,399,000",
    img1: "./images/revo-1.png",
    img2: "./images/revo-2.png",
    img3: "./images/revo-3.png",
    img4: "./images/revo-4.png",
    desc: "The King of all Terrains. Unmatched prestige and off-road capability.",
    specs: ["3.5L Twin Turbo V6", "10-Speed AT", "4WD", "Multi-Terrain Select"],
  },
};

const params = new URLSearchParams(window.location.search);
const carId = params.get("car");
const selectedCar = carData[carId];

const display = document.getElementById("car-details-page");

if (selectedCar) {
  display.innerHTML = `
                <div class="details-content">
                   <div class="details-images">
                    <img src="${selectedCar.img1}" class="fade-in">
                    <img src="${selectedCar.img2}" class="fade-in">
                    <img src="${selectedCar.img3}" class="fade-in">
                    <img src="${selectedCar.img4}" class="fade-in">
                    </div>
                    <h1>${selectedCar.name}</h1>
                    <p class="price">Starting from PKR ${selectedCar.price}</p>
                    <p class="description">${selectedCar.desc}</p>
                    <ul class="specs">
                        ${selectedCar.specs.map((s) => `<li>${s}</li>`).join("")}
                    </ul>
                    <a href="index.html" class="back-btn btn">Back to Home</a>
                    <a href="" class="btn">Place Order</a>
                </div>
            `;
} else {
  display.innerHTML = "<h1>Car not found</h1><a href='index.html'>Go Back</a>";
}
