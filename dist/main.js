

// Импортируем данные из JSON файла
const data = fetch("/data/menuData.json")
  .then((response) => response.json())
  .then((data) => {
    const drinksContainer = document.getElementById("drinksContainer");
      const foodContainer = document.getElementById("foodContainer");
      const homeCoffeeContainer = document.getElementById("homeCoffeeContainer");
      const merchandiseContainer = document.getElementById("merchandiseContainer");
      const giftCardsContainer = document.getElementById("giftCardsContainer");

      const createItemElement = (item) => {
        const imageElement = document.createElement("img");
        imageElement.src = item.imageUrl;
        imageElement.classList.add("w-24","h-24", "rounded-full");

        const nameElement = document.createElement("p");
        nameElement.textContent = item.name;
        nameElement.classList.add("mt-2", "mx-6","items-center");

        const itemElement = document.createElement("div");
        itemElement.classList.add("flex", "flex-row", "items-center","cursor-pointer");
        itemElement.appendChild(imageElement);
        itemElement.appendChild(nameElement);

        return itemElement;
      };

      data.drinks.forEach(drink => {
        const drinkElement = createItemElement(drink);
        drinksContainer.appendChild(drinkElement);
      });

      data.food.forEach(food => {
        const foodElement = createItemElement(food);
        foodContainer.appendChild(foodElement);
      });

      data.home_coffee.forEach(homeCoffee => {
        const homeCoffeeElement = createItemElement(homeCoffee);
        homeCoffeeContainer.appendChild(homeCoffeeElement);
      });

      data.merchandise.forEach(merchandise => {
        const merchandiseElement = createItemElement(merchandise);
        merchandiseContainer.appendChild(merchandiseElement);
      });

      data.gift_cards.forEach(giftCard => {
        const giftCardElement = createItemElement(giftCard);
        giftCardsContainer.appendChild(giftCardElement);
      });
  });

  var tabs = document.querySelectorAll(".tab-button");
  var tabPanels = document.querySelectorAll(".tab-panel");
  
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("tab-selected");
      });
  
      tabPanels.forEach(function (panel) {
        panel.classList.add("hidden");
      });
  
      tab.classList.add("tab-selected");
      tabPanels[index].classList.remove("hidden");
    });
  });

var buttons = document.querySelectorAll('[id^="tab-"]');

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (button) {
      button.classList.remove("underline-primary");
    });

    this.classList.add("underline-primary");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var owlCarousel = $(".owl-carousel");
  owlCarousel.owlCarousel();
});

var nonloopCarousel = $(".nonloop");
nonloopCarousel.owlCarousel({
  center: false,
  items: 2,
  loop: false,
  margin: 10,
  responsive: {
    600: {
      items: 4,
    },
  },
});

const ripples = document.querySelectorAll("[ripple]");

function addRipple(e) {
  const rippleContainer = this.querySelector(".ripple--container");

  const size = rippleContainer.offsetWidth;
  const pos = rippleContainer.getBoundingClientRect();
  const rippler = document.createElement("span");
  const x = e.pageX - pos.left - size / 2;
  const y = e.pageY - pos.top - size / 2;
  let style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;

  // adding optional option for ripple
  if (this.getAttribute("ripple-color")) {
    style += `background-color: ${this.getAttribute("ripple-color")}`;
  }

  if (this.getAttribute("ripple-radius")) {
    style += `border-radius: ${this.getAttribute("ripple-radius")}`;
  }

  rippleContainer.appendChild(rippler);
  rippler.setAttribute("style", style);

  console.log(rippleContainer);
}

function cleanUp(e) {
  const rippleContainer = this.querySelector(".ripple--container");
  while (rippleContainer.firstChild) {
    rippleContainer.removeChild(rippleContainer.firstChild);
    console.log("remove first child");
  }
}

ripples.forEach((ripple) => {
  const rippleContainer = document.createElement("div");
  rippleContainer.className = "ripple--container";

  // add ripple on mouse click
  ripple.addEventListener("mousedown", addRipple);
  // remove ripple after mouse click
  ripple.addEventListener("mouseup", debounce(cleanUp, 2000));

  ripple.rippleContainer = rippleContainer;
  ripple.appendChild(rippleContainer);
});