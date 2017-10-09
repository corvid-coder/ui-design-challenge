const template = document.createElement(`template`)

const elementName = `cc-feature`

template.innerHTML = `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <style>
    :host {
      background-color: var(--light);
      display: block;
      --delay: 0.5s;
    }
    article {
      display: flex;
      opacity: 0.01;
      transform: translateY(4vw);
      transition:
        transform var(--delay),
        opacity var(--delay);
    }
    img {
      width: 40vw;
      height: 40vw;
      object-fit: cover;
    }
    p {
      color: var(--dark);
    }
  </style>
  
  <section>
    <article>
      <img alt="featured image" src="vincent-van-zalinge-406029.jpg">
      <p>Lorem Ipsum</p>
    </article>
  </section>
  
`

class Element extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: `open`})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.el = this.shadowRoot.querySelector("article")
    if (this.hasAttribute(`flipped`)) {
      this.el.style.flexDirection = "row-reverse";
    }
    setTimeout(() => {
      this.observer = new IntersectionObserver((entries) => this.show(entries), {
        threshold: 0.75
      });
      this.observer.observe(this.el)
    }, 1000)
  }
  show (entries) {
    if(entries[0].intersectionRatio === 0) {
      return
    }
    this.el.style.opacity = 1;
    this.el.style.transform = `translateY(0)`
    this.observer.unobserve(this.el)
  }
}

customElements.define(elementName, Element)
