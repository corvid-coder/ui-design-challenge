import "./cc-buttons.js"
import "./cc-display.js"

const template = document.createElement(`template`)

const elementName = `cc-calculator`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
    :host {
      display: block;
      --primary: hsl(0, 0%, 100%);
      --secondary: hsl(0, 0%, 0%);
      --accent: hsl(30, 75%, 55%);
    }
    section {
      margin: 1rem;
      padding: 0.75rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
  </style>
  
  <section>
    <cc-display></cc-display>
    <cc-buttons></cc-buttons>
  </section>
  
`

class Element extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.el = this.shadowRoot.querySelector("article")
  }
}

customElements.define(elementName, Element)
