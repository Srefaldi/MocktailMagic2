import DataSource from "../data/data-source.js";
class KategoriDrink extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      .button-container {
        display: grid;
        grid-template-columns: repeat(13, 1fr); 
        grid-gap: 5px; 
      }
      
      button {
        padding: 5px 10px;
        background-color: #141E46;
        color: #fff;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        transition: background-color 0.3s, transform 0.3s; /* Animasi perubahan warna latar dan perbesaran */
      }

      /* Efek hover pada tombol */
      button:hover {
        background-color: black; /* Ganti warna latar saat tombol dihover */
        transform: scale(1.05); /* Perbesar tombol saat dihover */
      }

      /* Pusatkan teks di dalam elemen h3 */
      h3 {
        text-align: center;
        margin-bottom: 10px; /* Tambahkan margin bawah agar tidak terlalu dekat dengan tombol */
      }
    </style>
    <h3>SELECT BY LETTER</h3>
    <div class="button-container"></div><br>
  `;

    const buttonContainer = this.shadowDOM.querySelector(".button-container");

    for (let charCode = 65; charCode <= 90; charCode++) {
      const letter = String.fromCharCode(charCode);
      const buttonElement = document.createElement("button");
      buttonElement.textContent = letter;
      buttonElement.dataset.category = letter;
      buttonContainer.appendChild(buttonElement);
    }
  }

  attachEventListeners() {
    this.shadowDOM.addEventListener("click", async (event) => {
      if (event.target.tagName === "BUTTON") {
        const selectedLetter = event.target.textContent;
        try {
          const result = await DataSource.fetchDataByLetter(selectedLetter);
          this.renderResult(result);
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  renderResult(results) {
    const event = new CustomEvent("resultChanged", {
      bubbles: true,
      detail: {
        results: results,
      },
    });
    this.dispatchEvent(event);
  }
}

customElements.define("kategori-drink", KategoriDrink);
