import './style.css'
import { tipado } from './typescript/01-tipado'
import { funciones } from './typescript/03-funciones'
import { interfaces } from './typescript/04-interfaces'

// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>TypeScript</h3>
    <p>${tipado}</p>
    <p>${funciones}</p>
    <p>${interfaces}</p>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
