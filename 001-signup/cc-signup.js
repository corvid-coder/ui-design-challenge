const template = document.createElement(`template`)

template.innerHTML = `
  <link rel="stylesheet" href="cc-signup.css">
  <form class="cc-signup">
    <div>
      <!-- TODO: labels -->
      <input type="text" placeholder="email">
    </div>
    <div>
      <!-- TODO: labels -->
      <input type="password" placeholder="password">
    </div>
    <div>
      <!-- TODO: labels -->
      <button type="submit">Sign Up</button>
    </div>
  </form>
`

class CCSignup extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector("form")
      .addEventListener("submit", (e) => e.preventDefault())
  }
}

customElements.define(`cc-signup`, CCSignup)