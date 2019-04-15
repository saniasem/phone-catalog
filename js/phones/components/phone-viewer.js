import Component from "./component.js";

export default class PhoneViewer extends Component {
  constructor({ element, onBack = () => {} }) {
    super({ element });
    this.onBack = onBack;

    this.on("click", '[data-element="btn-element"]', this.onBack);
    this.on("click", '[data-element="small-preview"]', event => {
      const bigPreview = this._element.querySelector(
        '[data-element="big-preview"]'
      );
      bigPreview.src = event.target.src;
    });
  }

  show(phoneDetails) {
    this._phoneDetails = phoneDetails;
    this._render();
    super.show();
  }

  _render() {
    this._element.innerHTML = `
      <img class="phone" src="${
        this._phoneDetails.images[0]
      }" data-element="big-preview">

      <button data-element="btn-element">Back</button>
      <button>Add to basket</button>


      <h1>${this._phoneDetails.name}</h1>

      <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>

      <ul class="phone-thumbs">
        ${this._phoneDetails.images
          .map(
            imageUrl =>
              (this._element.innerHTML = `
          <li>
            <img src="${imageUrl}" data-element="small-preview">
          </li> 
          `)
          )
          .join("")}
      </ul>
      `;
  }
}
