import Component from './component.js';

export default class PhoneViewer extends Component {
    constructor({element, onBack = () => {}}) {
      super({element});
      this.onBack = onBack;


      this._element.addEventListener('click', (event) => {
        const btnBack = event.target.closest('[data-element="btn-element"]');
        if(!btnBack) {
          return;
        }
        this.onBack();
      })      
    }

    show(phoneDetails) {
      this._phoneDetails = phoneDetails;
      this._render();
      super.show();
    }

    _render() {
      this._element.innerHTML = `
      <img class="phone" src="${this._phoneDetails.images[0]}">

      <button data-element="btn-element">Back</button>
      <button>Add to basket</button>


      <h1>${this._phoneDetails.name}</h1>

      <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>

      <ul class="phone-thumbs">
        <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
        </li>
        <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
        </li>
        <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
        </li>
        <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
        </li>
        <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
        </li>
        <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
        </li>
      </ul>
      `
    }
}