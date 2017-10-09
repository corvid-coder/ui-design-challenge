const template = document.createElement(`template`)

const elementName = `cc-header`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
  :host {
    background-color: var(--dark);
    color: var(--light);
    padding: 0.5rem;
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
  header > * {
    flex-grow: 1;
  }
  ul {
    font-size: 0.75rem;
    text-align: right;
  }
  </style>
  
  <header>
    <section>
      Corvid Coder
    </section>
    <section>
      <ul>
        <li>Home</li>
        <li>Features</li>
      </ul>
    </section>
  </header>
  
`

class Element extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define(elementName, Element)
