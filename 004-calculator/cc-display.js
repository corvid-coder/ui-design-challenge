const template = document.createElement(`template`)

const elementName = `cc-display`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
    :host {
      display: block;
    }
    label {
      font-size: 0.5rem;
      display: block;
      text-align: right;
    }
    input {
      font-size: 1.5rem;
      width: 100%;
      display: block;
      border: none;
      font-family: "Source Code Pro", monospace;
      font-weight: 300;
      border-bottom: 1px solid var(--secondary);
      text-align: right;
    }
  </style>
  
  <section>
    <label>Result</label>
    <input type="text" value="-123.98">
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
