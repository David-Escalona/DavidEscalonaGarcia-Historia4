import { juego } from "./juego.js"
import { buscador } from "../funciones/funciones.js"

export const vistaRanking = {
    template: 
    `
    <!DOCTYPE html>
    <html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Prototipo</title>
		<!-- bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
			crossorigin="anonymous"
		/>
		<!-- fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
			rel="stylesheet"
		/>

		<!-- icons -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>

		<style>
			body {
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url("img/fondo.jpg");
				font-family: "VT323", monospace;
				font-size: 25px;
			}
		</style>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body class="text-light">
    <div id="info" class="">
				<div class="m-5 p-5 bg-dark">
					<h2 class="text-center text-light">Ranking</h2>
					<table class="table table-dark align-middle">
						<theader>
							<tr class="bg-dark">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</theader>
						<tbody>
							<tr>
							<td><img src="img/messi.jpg" alt="Messi" height="50"></td>
							<td>Messi</td>
							<td>10</td>
							<td>13 ABRIL 2023</td>
						</tr>
						<tr>
							<td><img src="img/cristiano.jpg" alt="Cristiano" height="50"></td>
							<td>Cristiano</td>
							<td>600</td>
							<td>13 FEBRERO 2023</td>
						</tr>
						<tr>
							<td><img src="img/neymar.jpg" alt="Neymar" height="50"></td>
							<td>Neymar</td>
							<td>888</td>
							<td>1 ENERO 2023</td>
						</tr>
						</tbody>
						<tfoot></tfoot>
					</table>
				</div>
				
				<div id="partidas" class="m-5 p-5 bg-dark">
					<h2 class="text-center text-light">Partidas</h2>
					
					<div id="buscador" class="input-group mb-3">
					<button
							class="btn btn-outline-secondary"
							type="button"
							id="boton"
						>
							<i>Buscador</i>
						</button>
						<input
							type="text"
							class="form-control"
							placeholder="Buscador"
							aria-label="Buscador"
							aria-describedby="button-addon2"
						/>
						<button
							class="btn btn-outline-secondary"
							type="button"
							id="borrar"
						>
							<i>X</i>
						</button>
					</div>
					<table class="table table-dark">
						<theader>
							<tr>
								<td></td>
								<td>Nick <i class="bi bi-arrow-up-square"></i></td>
								<td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
								<td>Fecha <i class="bi bi-arrow-up-square"></i></td>
							</tr>
						</theader>
						<tbody>
							
						</tbody>
						<tfoot></tfoot>
					</table>
				</div>
                <div class="justify-content-center text-center mb-5 pb-5">
                <button id="partida" class="btn btn-success fs-1 mt-5">JUGAR</button>
                </div>
			</div>
    `,

    script: () => {
			document.querySelector("#boton").addEventListener("click", () => { // Dentro del documento selecciono el id boton y le añado un evento click
		  	const textoBusqueda = document.querySelector("#buscador input").value; // Creo una variable llamada textoBusqueda y la selecciono del documento mediante el id buscador metiendome en el input y saco su valor
		  	const partidasCoincidentes = buscador(textoBusqueda); // Creo la variable partidasCoincidentes y dentro de la funcion buscador llamo al textoBusqueda
				
			limpiarRanking(); // Limpiar el contenido actual del ranking

		  	actualizarRanking(partidasCoincidentes); // Actualizar el contenido del ranking con las partidas coincidentes
		});
	
			document.querySelector("#partida").addEventListener("click", () => {// Dentro del documento selecciono el id partidas y le añado un evento click
		  	document.querySelector("main").innerHTML = juego.template; // Selecciono la etiqueta main e inyecto en el html el codigo de juego.template
		  	juego.script(); // Llamo a la funcion juego
		});
	  },
	};
	
	function limpiarRanking(){ // Exporto una funcion llamada limpiaRanking

		const ranking = document.querySelector("#partidas tbody"); // Creo una variable llamada ranking y la selecciono del documento mediante el id partidas dentro del tbody
		ranking.innerHTML = ""; // Limpio el contenido actual de la tabla
	
	}

	function actualizarRanking(partidas){ // Exporto una funcion que acabo de creo llamada actualizarRanking que recibe el valor partidas
	
		const ranking = document.querySelector("#partidas tbody"); // Creo una variable ranking y la selecciono del documento mediante su id partidas dentro del tbody
		
		partidas.forEach((partidas, sumar) => { // Con esta linea voy agregando mediante un forEach las partidas
		const fila = document.createElement("tr"); // Creo una variable llamada filas y hago que en el documento me agregue un tr
		fila.innerHTML = `
		  <td class="fs-2">${sumar + 1}</td>
		  <td><img src="img/${partidas.nick.toLowerCase()}.jpg" alt="avatar" height="50"/></td>
		  <td>${partidas.nick}</td>
		  <td>${partidas.puntuacion}</td>
		`;
		// En la primera linea voy añadiendo al html la variable fila
		// La segunda linea me aplica el jugador que coincide y el +1 es porque enpieza en 0
		// La tercera linea nos inyecta al html el codigo del jugador que coincide con su imagen y nick
		// La cuarta linea nos agrega su nick
		// La quita linea nos agrega su puntuacion
	
		ranking.appendChild(fila); // Por ultimo esta linea en el ranking nos agrega las filas creadas en caso de jugador coincidente gracias al appendChild
	  });
	}