let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    mulitiplier: 1
  }
};
let autoUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};
let cheese = 0;

function mine() {
  cheese +=
    1 + clickUpgrades.pickaxes.mulitiplier * clickUpgrades.pickaxes.quantity;
  update();
}
function update() {
  document.querySelector("#cheese-count").innerText = cheese;
}
function buyPickAxe() {
  if (cheese < clickUpgrades.pickaxes.price) {
    return;
  }
  clickUpgrades.pickaxes.quantity += 1;
  cheese -= clickUpgrades.pickaxes.price;
  clickUpgrades.pickaxes.price += 50;
  update();
  console.log("Purchased");
}
