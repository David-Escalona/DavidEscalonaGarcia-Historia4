import { home } from "./home.js"

export const juego = {
	template:
		  `
		<div id="juego">
		<div class="row">
		  <div
			class="col-4 d-flex flex-column justify-content-end align-items-center p-5">
			<h4 class="text-light">Nivel: <span>1</span></h4>
			<h4 class="text-light">Tiempo: <span>10 Minutos</span></h4>
			<h4 class="text-light">Lineas: <span>5</span></h4>
			<h4 class="text-light">Puntos: <span>777777</span></h4>
		  </div>
		  <!-- Panel central -->
		  <div class="col-4 d-flex justify-content-center">
			<div id="panel" class="p-5">
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			</div>
		  </div>
		  <div>
		  <button id="volver" class="btn btn-success fs-1 mt-5">VOLVER</button>
		  </div>
		  `,

	script: () => {
        document.querySelector('#volver').addEventListener('click', () =>{
        document.querySelector('main').innerHTML = home.template
        home.script()
		})
    }
}

  