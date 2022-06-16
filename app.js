const button = document.querySelector("#searchButton");
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

button.addEventListener("click", () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
      name.classList.add("nameBG");

      imageFront.innerHTML = `<img src=${imageFrontValue} width="150" height="150">`;
      imageBack.innerHTML = `<img src=${imageBackValue} width="150" height="150">`;

      ability.innerHTML = `ability: <span>${abilitiesValue}</span>`;
      ability.classList.add("border");
      weight.innerHTML = `weight: <span>${weightValue}</span>`;
      weight.classList.add("border");
      height.innerHTML = `height: <span>${heightValue}</span>`;
      height.classList.add("border");
      items.innerHTML = `items: <span>${itemsValue}</span>`;
      items.classList.add("border");
      types.innerHTML = `types: <span>${typesValue}</span>`;
      types.classList.add("border");
      species.innerHTML = `species: <span>${speciesValue}</span>`;
      species.classList.add("border");

      input.value = "";

      output.style.display = "flex";
    })
    .catch((err) => alert("Something went wrong"));
});
