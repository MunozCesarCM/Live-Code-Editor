export const codeHTML =
  `<svg viewBox="0 0 256 256" class="svg gooey">
  <defs>
    <filter id="filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -1" result="filter" />
      <feComposite in="SourceGraphic" in2="filter" operator="atop" />
    </filter>
  </defs>
</svg>`;

export const codeCSS =
  `* {
  box-sizing: border-box;
}
body {
  margin: 0;
  filter: url('#filter');
  overflow: hidden;
}
.point {
  --size: 40px;
  width: var(--size);
  height: calc(var(--size) * 1.5);
  position: fixed;
  border-radius: calc(var(--size) * .5);
  margin: calc(var(--size) * -.5) 0 0 calc(var(--size) * -.5);
  border: 1px solid black;
  blur: filter(4px);
}`;

export const codeJS =
  `const maxDist = window.innerWidth * .2
const lerp = (a, b, t) => a * (1 - t) + b * t

const mouse = {
  x: 0,
  y: 0,
  newX: 0,
  newY: 0,
}

class Point {
  constructor (obj) {
    Object.assign(this, obj)
    this.newX = 0
    this.newY = 0
    this.dist = Math.random() * .5 - 1
    this.scale = Math.random() * .5
    this.rot = 0
    this.init()
  }

  init () {
    this.div = document.createElement('div')
    this.div.classList.add('point')
    const style = {
      left: \`\${this.x}px\`,
      top: \`\${this.y}px\`,
    }
    Object.assign(this.div.style, style)
    document.body.appendChild(this.div)
  }

  move () {
    const dist = Math.sqrt(
      Math.pow(mouse.x - this.x, 2) +
      Math.pow(mouse.y - this.y, 2)
    )
    if (dist < maxDist || dist > maxDist * 4) {
      this.newX = lerp(this.newX, (mouse.x - this.x) * this.dist, .02)
      this.newY = lerp(this.newY, (mouse.y - this.y) * this.dist, .02)
    } else {
      this.newX = lerp(this.newX, 0, .05)
      this.newY = lerp(this.newY, 0, .05)
    }

    this.rot = lerp(this.rot, this.dist * dist, .05)

    this.div.style.transform = \`translate(\${this.newX}px, \${this.newY}px) rotate(\${this.rot}deg) scale(\${1 + this.scale})\`
  }
}

const Points = []
for (let i = 0; i < 100; i++) {
  Points.push(
    new Point({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    })
  )
}

const animate = () => {
  Points.forEach((p) => {
    p.move()
  })
  requestAnimationFrame(animate)

  mouse.newX = lerp(mouse.newX, mouse.x, .04)
  mouse.newY = lerp(mouse.newY, mouse.y, .04)

  document.body.style.transform = \`translate(\${mouse.newX * -.2}px, \${mouse.newY * -.2}px)\`
}
animate()

const handleMouseMove = (e) => {
  mouse.x = e.clientX || e.touches[0].clientX || 0
  mouse.y = e.clientY || e.touches[0].clientY || 0
}

window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('touchstart', handleMouseMove)
window.addEventListener('touchmove', handleMouseMove)`;
