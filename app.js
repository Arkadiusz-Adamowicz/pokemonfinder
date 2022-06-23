const error = document.querySelector(".error");
const button = document.querySelector("#searchButton");
const buttonPrev = document.querySelector("#btn-prev");
const buttonNext = document.querySelector("#btn-next");
const input = document.querySelector("#searchText");
const output = document.querySelector("#output");
const name = document.querySelector("#name");
const imageFront = document.querySelector("#image_front");
const imageBack = document.querySelector("#image_back");
const ability = document.querySelector("#ability");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const items = document.querySelector("#items");
const types = document.querySelector("#types");
const species = document.querySelector("#species");
const heading = document.querySelector(".heading");
const propertiesContainer = document.querySelector(".properties-container");
const imageContainer = document.querySelector(".image-container");

buttonNext.style.display = "none";
buttonPrev.style.display = "none";
heading.style.backgroundPositionY = "-150px";

button.addEventListener("click", () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
      const nameValue = data.name;
      const imageFrontValue = data.sprites.front_default;
      const imageBackValue = data.sprites.back_default;
      const weightValue = data.weight;
      const heightValue = data.height;
      const abilitiesValue = data.abilities
        .map((ability) => ability.ability.name)
        .join(", ");
      const itemsValue = data.held_items
        .map((item) => item.item.name)
        .join(", ");
      const typesValue = data.types
        .map((type) => type.type.name)
        .join(", ");
      const speciesValue = data.name;

      name.innerHTML = nameValue;
      name.style.margin = "1rem 0";
      name.classList.add("nameBG");
      output.style.display = "flex";
      imageFront.innerHTML = `<img src=${imageFrontValue} width="200" height="200" center>`;
      imageBack.innerHTML = `<img src=${imageBackValue} width="200" height="200 center">`;
      ability.innerHTML = `ability: <span>${abilitiesValue}</span>`;
      ability.classList.add("border");
      weight.innerHTML = `weight: <span>${weightValue}</span>`;
      weight.classList.add("border");
      height.innerHTML = `height: <span>${heightValue}</span>`;
      height.classList.add("border");
      items.innerHTML = `held items: <span>${itemsValue}</span>`;
      items.classList.add("border");
      types.innerHTML = `types: <span>${typesValue}</span>`;
      types.classList.add("border");
      species.innerHTML = `species: <span>${speciesValue}</span>`;
      species.classList.add("border");
      heading.style.backgroundPositionY = "0";
      heading.style.background.size = "cover";
      input.value = "";
    })
    .catch((err) => alert("error try again"));
});


