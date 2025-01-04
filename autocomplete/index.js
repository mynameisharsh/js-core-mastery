const suggestionsArr = ["banana", "apple", "guaua", "grapes"];

var input = document.getElementById("input");
var suggestion = document.getElementById("autosuggest");

input.addEventListener("input", function (e) {
  console.log(input.value);

  suggestion.innerHTML = "";

  const filtered = suggestionsArr.filter((x) =>
    x.toLowerCase().includes(input.value.toLowerCase())
  );

  filtered.map((filter) => {
    var item = document.createElement("div");
    item.innerHTML = filter;
    item.classList.add("item");
    item.addEventListener("click", function () {
      input.value = filter;
      suggestion.innerHTML = "";
    });
    suggestion.appendChild(item);
  });
});