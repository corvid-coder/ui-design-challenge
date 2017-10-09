
const template = document.createElement(`template`)

const elementName = `cc-footer`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
  :host {
    background-color: var(--dark);
    color: var(--light);
    padding: 0.5rem;
    font-size: 0.25rem;
    display: block;
  }
  </style>
  
  <footer>
  &copy; 2017 Danny Fritz & Corvid Coder
  </footer>
  
`

class Element extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define(elementName, Element)
