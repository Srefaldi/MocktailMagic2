import "./drink-item.js";

class DrinkList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between; /* Menjaga jarak antara item */
        }
        drink-item {
          flex-basis: calc(33.33% - 10px); /* Lebar item 33.33% dengan jarak 10px */
          margin-bottom: 20px;
        }
      </style>
    `;

    this._clubs.forEach((club) => {
      const clubItemElement = document.createElement("drink-item");
      clubItemElement.club = club;
      this.shadowDOM.appendChild(clubItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("drink-list", DrinkList);
