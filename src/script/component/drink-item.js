class DrinkItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set club(club) {
    this._club = club;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          color: white;
          background-color: #141E46; /* Ganti warna latar belakang card di sini */
          transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s; /* Animasi perubahan warna latar, transform, dan bayangan saat dihover */
        }
        :host:hover {
          background-color: #141E46; /* Ganti warna latar belakang card saat dihover */
          box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2); /* Efek bayangan saat dihover */
          transform: scale(10.05); /* Perbesar card saat dihover */
        }
        .fan-art-club {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
          margin-top: 0; /* Hapus margin atas */
        }
        .club-info {
          padding: 24px;
        }
        .club-info > h2 {
          font-weight: lighter;
        }
        .club-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
     <img class="fan-art-club" src="${this._club.strDrinkThumb}" alt="Fan Art">
      <div class="club-info">
        <h2>${this._club.strDrink}</h2>
        <p>${this._club.strInstructions}</p>
      </div>
    `;
  }
}

customElements.define("drink-item", DrinkItem);
