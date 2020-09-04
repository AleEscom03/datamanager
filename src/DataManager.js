import { html, LitElement } from 'lit-element';

export class DataManager extends LitElement {

  static get properties() {
    return {
      url: { type: String },
      data: { type: Array },
      limit: { type: String }
    };
  }

  constructor() {
    super();
    this.url = "https://rickandmortyapi.com/api/character/";
    this.data = [];
  }

  async firstUpdated() {
    await fetch(`${this.url}`)
      .then(r => r.json())
      .then(data => {
        this.mapInfo(data.results);
      });
    this.dispatchEvent(new CustomEvent('info-loaded', { detail: this.data }));
  }

  mapInfo(data) {
    data.forEach((item, index) => {
      let itm = {
        name: item.name,
        id: item.id,
        image: item.image
      }
      this.data = [...this.data, itm]
    });
  }

}
