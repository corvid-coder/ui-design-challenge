
const template = document.createElement(`template`)

const elementName = `cc-hero`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
  :host {}
    img {
      width: 100%;
    }
  </style>
  
  <section>
    <img alt="Corvid Coder" src="ignacio-giri-82605.jpg">
  </section>
  
`

class Element extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define(elementName, Element)
