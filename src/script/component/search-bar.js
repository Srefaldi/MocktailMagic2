class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      .search-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 16px;
        border-radius: 5px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
      .search-container > input {
        padding: 12px;
        border: 2px solid #141E46;
        border-radius: 5px;
        font-weight: bold;
        margin-bottom: 8px;
        transition: border-color 0.3s; /* Animasi warna border saat hover */
      }
      .search-container > input:focus {
        outline: none;
        border: 2px solid #071952;
      }
      /* Efek hover untuk elemen input */
      .search-container > input:hover {
        border: 5px solid black; 
      }
      .search-container > button {
        cursor: pointer;
        padding: 8px 12px;
        background-color: #141E46;
        color: white;
        border: none;
        border-radius: 10px;
        text-transform: uppercase;
        max-width: 100px;
        margin: 0 auto;
        transition: background-color 0.3s; /
      }
      /* Efek hover untuk tombol "Search" */
      .search-container > button:hover {
        background-color: black; /* Ganti warna latar saat hover */
      }
      @media screen and (max-width: 550px) {
        .search-container > input {
          border-radius: 5px;
        }
        .search-container > button {
          border-radius: 10px;
        }
      }
        h3 {
        text-align: center;
        margin-bottom: 10px; /* Tambahkan margin bawah agar tidak terlalu dekat dengan tombol */
      }
    </style>
    
    <div class="search-container">
    <h3>SEARCH BY NAME</h3>
      <input placeholder="Search Mocktail" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">Search</button>
    </div>
  `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}
customElements.define("search-bar", SearchBar);
