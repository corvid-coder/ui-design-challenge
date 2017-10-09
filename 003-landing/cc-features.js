import "./cc-feature.js"

const template = document.createElement(`template`)

const elementName = `cc-features`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
  :host {}
  </style>
  
  <section>
    <ul>
      <li>
        <cc-feature></cc-feature>
      </li>
      <li>
        <cc-feature flipped></cc-feature>
      </li>
    </ul>
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
