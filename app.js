const button = document.querySelector("#searchButton");
const input = document.querySelector("#searchText");
const output = document.querySelector("#output");
const name = document.querySelector("#name");
const imageFront = document.querySelector("#image_front");
const imageBack = document.querySelector("#image_back");
const ability = document.querySelector("#ability");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

button.addEventListener("click", () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const nameValue = data["name"];
      const imageFrontValue = data["sprites"]["front_default"];
      const imageBackValue = data["sprites"]["back_default"];
      const abilitiesValue = data["abilities"][0]["ability"]["name"];
      const weightValue = data["weight"];
      const heightValue = data["height"];

      name.innerHTML = nameValue;
      name.classList.add("name_border");
      imageFront.innerHTML = `<img src=${imageFrontValue} width="150" height="150">`;
      imageBack.innerHTML = `<img src=${imageBackValue} width="150" height="150">`;
      ability.innerHTML = `ability: <span>${abilitiesValue}</span>`;
      ability.classList.add("border");
      weight.innerHTML = `weight:  <span>${weightValue}</span>`;
      weight.classList.add("border");
      height.innerHTML = `height:  <span>${heightValue}</span>`;
      height.classList.add("border");
      input.value = "";
      output.style.display = "flex";
    })
    .catch((err) => alert("Something went wrong"));
});
