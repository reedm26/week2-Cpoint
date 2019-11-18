let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 0
  },
  grater: {
    price: 30,
    quantity: 0,
    multiplier: 0
  },
  melter: {
    price: 50,
    quantity: 0,
    multiplier: 0
  }
};
let autoUpgrades = {
  rovers: {
    price: 80,
    quantity: 0,
    multiplier: 0
  }
};
let cheese = 0;
// let pickCount = clickUpgrades.pickaxes.quantity;s

let perClick =
  1 +
  clickUpgrades.pickaxes.multiplier * clickUpgrades.pickaxes.quantity +
  clickUpgrades.grater.multiplier * clickUpgrades.grater.quantity;
// clickUpgrades.grater.multiplier * clickUpgrades.grater.quantity;
// clickUpgrades.grater.multiplier * clickUpgrades.grater.quantity +
// clickUpgrades.melter.multiplier * clickUpgrades.melter.quantity;
function mine() {
  cheese +=
    1 +
    clickUpgrades.pickaxes.multiplier * clickUpgrades.pickaxes.quantity +
    clickUpgrades.grater.multiplier * clickUpgrades.grater.quantity +
    clickUpgrades.melter.multiplier * clickUpgrades.melter.quantity;
  // autoUpgrades.rovers.multiplier * autoUpgrades.rovers.quantity;
  update();
}
function update() {
  document.querySelector("#cheese-count").innerText = cheese;
  document.querySelector("#pick-count").innerText =
    clickUpgrades.pickaxes.quantity;
  document.querySelector("#pick-multiplier").innerText =
    clickUpgrades.pickaxes.multiplier;
  document.querySelector("#grater-count").innerText =
    clickUpgrades.grater.quantity;
  document.querySelector("#grater-multiplier").innerText =
    clickUpgrades.grater.multiplier;
  document.querySelector("#melter-count").innerText =
    clickUpgrades.melter.quantity;
  document.querySelector("#melter-multiplier").innerText =
    clickUpgrades.melter.multiplier;
  document.querySelector("#rovers-count").innerText =
    autoUpgrades.rovers.quantity;
  document.querySelector("#rovers-multiplier").innerText =
    autoUpgrades.rovers.multiplier;

  document.querySelector("#pick-price").innerText =
    clickUpgrades.pickaxes.price;
  document.querySelector("#grater-price").innerText =
    clickUpgrades.grater.price;
  document.querySelector("#melter-price").innerText =
    clickUpgrades.melter.price;
  document.querySelector("#rovers-price").innerText = autoUpgrades.rovers.price;
  document.querySelector("#per-second").innerText =
    autoUpgrades.rovers.multiplier;
  document.querySelector("#per-click").innerText = perClick;
}
function buyPickAxe() {
  if (cheese < clickUpgrades.pickaxes.price) {
    return;
  }
  clickUpgrades.pickaxes.multiplier += 1;
  clickUpgrades.pickaxes.quantity += 1;
  cheese -= clickUpgrades.pickaxes.price;
  clickUpgrades.pickaxes.price += 10;
  perClick +=
    clickUpgrades.pickaxes.quantity + clickUpgrades.pickaxes.multiplier - 1;
  update();
}
function buyGrater() {
  if (cheese < clickUpgrades.grater.price) {
    return;
  }
  clickUpgrades.grater.multiplier += 3;
  clickUpgrades.grater.quantity += 1;
  console.log("here");
  cheese -= clickUpgrades.grater.price;
  clickUpgrades.grater.price += 10;
  perClick +=
    clickUpgrades.grater.multiplier + clickUpgrades.grater.quantity - 1;
  update();
}
function buyMelter() {
  if (cheese < clickUpgrades.melter.price) {
    return;
  }
  clickUpgrades.melter.multiplier += 6;
  clickUpgrades.melter.quantity += 1;
  cheese -= clickUpgrades.melter.price;
  clickUpgrades.melter.price += 50;
  update();
}
function buyRover() {
  if (cheese < autoUpgrades.rovers.price) {
    return;
  }
  autoUpgrades.rovers.multiplier += 20;
  autoUpgrades.rovers.quantity += 1;
  cheese -= autoUpgrades.rovers.price;
  autoUpgrades.rovers.price += 80;
  update();
}
function startTimer() {
  let timer = setInterval(autoCount, 1000);
}
function autoCount() {
  if (autoUpgrades.rovers.quantity > 0) {
    cheese += autoUpgrades.rovers.quantity * 20;
    update();
  }
}
startTimer();
update();
