import "../component/drink-list.js";
import "../component/search-bar.js";
import "../component/kategori-drink.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("drink-list");
  const kategoriDrinkElement = document.querySelector("kategori-drink");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCockTail(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  const fetchDataByLetter = async (letter) => {
    try {
      const result = await DataSource.fetchDataByLetter(letter);
      renderResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;

  kategoriDrinkElement.addEventListener("resultChanged", (event) => {
    const results = event.detail.results;
    renderResult(results);
  });
};

export default main;
