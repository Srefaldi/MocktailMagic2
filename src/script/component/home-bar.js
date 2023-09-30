class HomeBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = "Selamat Datang Diwebsite Pencarian Mocktail!";
    const text = "Temukan Mocktail Kesukaan Anda Disini";

    this.shadowDOM.innerHTML = `
    <style>
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background-size: cover;
        background-position: center;
        position: relative;
        margin-top: 10px;
        margin-bottom: 20px;
      }

      .text-container {
        text-align: center;
        background-color: #141E46;
        color: white;
        padding: 20px;
        border-radius: 10px;
        overflow: hidden; /* Untuk menghilangkan teks yang keluar dari kotak */
      }

      .text-container h1,
      .text-container p {
        font-size: 2em;
        margin-bottom: 10px;
        white-space: nowrap; /* Hindari teks melingkar */
        overflow: hidden; /* Sembunyikan teks yang tidak terlihat */
        width: 0; /* Mulai dengan lebar nol */
      }

      .text-container h1 {
        animation: revealText 5s linear infinite; /* Animasi muncul */
      }

      .text-container p {
        animation: revealText 5s linear 2.5s infinite; /* Animasi muncul dengan delay 2.5 detik */
      }

      @keyframes revealText {
        to {
          width: 100%; /* Akhiri dengan lebar 100% */
        }
      }

      .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    </style>

    <div class="text-container">
      <h1>${title}</h1>
      <p>${text}</p>
    </div>
  `;
  }
}
customElements.define("home-bar", HomeBar);
