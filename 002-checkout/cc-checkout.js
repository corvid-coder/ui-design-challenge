import "./cc-checkoutitem.js"

const template = document.createElement(`template`)

template.innerHTML = `

  <style>
    .cc-checkout {
      margin: 0;
      padding: 0;
    }
    .cc-checkout > section {
      display: block;
      padding: 0.5rem;
      margin: 0.5rem 0;
      background-color: hsl(210, 80%, 96%);
      border-radius: 0.1rem;
    }
    cc-checkoutitem~cc-checkoutitem {
      margin-top: 0.25rem;
    }
    cc-checkoutitem:nth-child(2n) {
      background-color: hsl(210, 80%, 90%);
    }
    
    input {
      border-radius: 0.1rem;
      border: hsla(210, 80%, 5%, 0.3) 1px solid;
      font-size: 1rem;
      width: 100%;
    }
  </style>
  
  <form class="cc-checkout">
    <section class="cc-checkout__items">
      <cc-checkoutitem data-id="0"></cc-checkoutitem>
      <cc-checkoutitem data-id="1"></cc-checkoutitem>
    </section>
    <section class="cc-checkout__address">
      <input class="address" placeholder="address">
    </section>
    <section class="cc-checkout__payment credit-card">
      <input class="credit-card__number" placeholder="Credit Card #">
      <input class="credit-card__cvc" placeholder="CVC">
      <input class="credit-card__exp" placeholder="Expiration">
    </section>
    <input type="submit" class="cc-checkout__buy" value="Buy">
  </form>
  
`

class CCCheckout extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector("form")
      .addEventListener("submit", (e) => e.preventDefault())
  }
}

customElements.define(`cc-checkout`, CCCheckout)