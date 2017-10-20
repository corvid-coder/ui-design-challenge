const template = document.createElement(`template`)

const elementName = `cc-buttons`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
    :host {
      display: block;
    }
    .calculator__operators {
      display: flex;
      justify-content: space-between;
      padding: 0.25rem 0rem;
    }
    .calculator__operators > * {
      flex-grow: 1;
      flex-basis: 100px;
    }
    .calculator__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-column-gap: 0.25rem;
      grid-row-gap: 0.25rem;
      grid-template-areas:
        "seven eight nine clear"
        "four five six plusminus"
        "one two three equal"
        "zero zero period equal";
    }
    .calculator__button {
      width: 100%;
      text-align: center;
      padding: 0.25rem 0.25rem;
      background-color: var(--primar);
      color: var(--secondary);
      border: none;
      transition: box-shadow 0.3s ease;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      font-size: 1rem;
      font-family: 'Source Code Pro', monospace;
      font-weight: 200;
      cursor: pointer;
    }
    .calculator__button:hover {
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);;
    }
    .calculator__button:active {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .calculator__button.--accent {
      color: var(--primary);
      background-color: var(--accent);
    }
    .calculator__button.--reverse {
      color: var(--primary);
      background-color: var(--secondary);
    }
    .calculator__operators > *~* {
      margin-left: 0.25rem;
    }
    .zero {
      grid-area: zero;
    }
    .one {
      grid-area: one;
    }
    .two {
      grid-area: two;
    }
    .three {
      grid-area: three;
    }
    .four {
      grid-area: four;
    }
    .five {
      grid-area: five;
    }
    .six {
      grid-area: six;
    }
    .seven {
      grid-area: seven;
    }
    .eight {
      grid-area: eight;
    }
    .nine {
      grid-area: nine;
    }
    .dot {
      grid-area: dot;
    }
    .clear {
      grid-area: clear;
    }
    .equal {
      grid-area: equal;
    }
    .plusminus {
      grid-area: plusminus;
    }
  </style>
  
  <ol class="calculator__operators">
    <li><button class="calculator__button --reverse">+</button></li>
    <li><button class="calculator__button --reverse">-</button></li>
    <li><button class="calculator__button --reverse">*</button></li>
    <li><button class="calculator__button --reverse">/</button></li>
    <li><button class="calculator__button --reverse">^</button></li>
    <li><button class="calculator__button --reverse">√</button></li>
  </ol>
  <section class="calculator__buttons">
    <button class="calculator__button zero">0</button>
    <button class="calculator__button one">1</button>
    <button class="calculator__button two">2</button>
    <button class="calculator__button three">3</button>
    <button class="calculator__button four">4</button>
    <button class="calculator__button five">5</button>
    <button class="calculator__button six">6</button>
    <button class="calculator__button seven">7</button>
    <button class="calculator__button eight">8</button>
    <button class="calculator__button nine">9</button>
    <button class="calculator__button --accent equal">=</button>
    <button class="calculator__button period">.</button>
    <button class="calculator__button --accent clear">C</button>
    <button class="calculator__button plusminus">±</button>
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
