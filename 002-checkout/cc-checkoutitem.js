const template = document.createElement(`template`)
import data from "./items.js"

template.innerHTML = `

  <style>
  :host {
    display: inline-block;
  }
  article {
    font-size: 0.5rem;
    color: hsla(210, 80%, 5%, 1.0);
    display: grid;
    grid: 1fr auto / 2rem 1fr;
    grid-column-gap: 0.25rem;
    line-height: 0.5rem;
  }
  .image {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    grid-area: 1 / 1 / 3 / 2;
  }
  .name {
    padding-top: 0.25rem;
    padding-right: 0.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .price {
    text-align: right;
    padding-bottom: 0.25rem;
    padding-right: 0.25rem;
    justify-self: end;
    align-self: end;
  }
  </style>
  
  <article>
    <img class="image">
    <span class="name"></span>
    <span class="price"></span>
  </article>
  
`

class CCCheckoutitem extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.itemId = this.getAttribute(`data-id`)
    console.log(data[this.itemId])
    this.shadowRoot.querySelector(".image")
      .setAttribute("src", data[this.itemId].image)
    this.shadowRoot.querySelector(".name")
      .textContent = data[this.itemId].name
    this.shadowRoot.querySelector(".name")
      .title = data[this.itemId].name
    this.shadowRoot.querySelector(".price")
      .textContent = data[this.itemId].price
  }
}

customElements.define(`cc-checkoutitem`, CCCheckoutitem)