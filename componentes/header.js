import { home } from "../vistas/home.js"

export const header = {
    template: 
    `
    
    `,

    script: () => {
        document.querySelector('header').innerHTML = home.template
        }
    }