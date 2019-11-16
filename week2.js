let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    mulitiplier: 1
  },
  grater: {
    price: 300,
    quantity: 0,
    mulitiplier: 3
  },
  melter: {
    price: 550,
    quantity: 0,
    mulitiplier: 6
  }
};
let autoUpgrades = {
  rovers: {
    price: 800,
    quantity: 0,
    multiplier: 20
  }
};
let cheese = 90;
// let pickCount = clickUpgrades.pickaxes.quantity;s

function mine() {
  cheese +=
    1 + clickUpgrades.pickaxes.mulitiplier * clickUpgrades.pickaxes.quantity;
  1 + clickUpgrades.grater.mulitiplier * clickUpgrades.grater.quantity;
  1 + clickUpgrades.melter.mulitiplier * clickUpgrades.melter.quantity;
  update();
}
function update() {
  document.querySelector("#cheese-count").innerText = cheese;
  document.querySelector("#pick-count").innerText =
    clickUpgrades.pickaxes.quantity;
  document.querySelector("#pick-multiplier").innerText =
    clickUpgrades.pickaxes.mulitiplier;
  document.querySelector("#grater-count").innerText =
    clickUpgrades.grater.quantity;
  document.querySelector("#grater-multiplier").innerText =
    clickUpgrades.grater.mulitiplier;
}
function buyPickAxe() {
  if (cheese < clickUpgrades.pickaxes.price) {
    return;
  }
  clickUpgrades.pickaxes.quantity += 1;
  cheese -= clickUpgrades.pickaxes.price;
  clickUpgrades.pickaxes.price += 50;
  update();
}
function buyGrater() {
  if (cheese < clickUpgrades.grater.price) {
    return;
  }
  clickUpgrades.grater.quantity += 1;
  cheese -= clickUpgrades.grater.price;
  clickUpgrades.grater.price += 150;
  update();
}
function buyMelter() {
  if (cheese < clickUpgrades.melter.price) {
    return;
  }
  clickUpgrades.melter.quantity += 1;
  cheese -= clickUpgrades.melter.price;
  clickUpgrades.melter.price += 550;
  update();
}
function buyRover() {
  if (cheese < autoUpgrades.rover.price) {
    return;
  }
  autoUpgrades.rover.quantity += 1;
  cheese -= autoUpgrades.rover.price;
  autoUpgrades.rover.price += 800;
  update();
}
