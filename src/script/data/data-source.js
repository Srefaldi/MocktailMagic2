class DataSource {
  static searchCockTail(keyword) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  // Mencari Data Dengan Kategori Buttom
  static fetchDataByLetter(letter) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        } else {
          return Promise.reject(
            `No drinks found starting with letter ${letter}`
          );
        }
      });
  }
}

export default DataSource;
