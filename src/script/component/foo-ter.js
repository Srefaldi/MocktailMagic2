class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
<style>
  footer {
    background-color: #141E46;
    color: white;
    padding: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
<footer class="footer">
  &copy; 2023 - Sopia Refaldi. Belajar Fundamental Front-End Web Development.
</footer>`;
  }
}

customElements.define("my-footer", Footer);
