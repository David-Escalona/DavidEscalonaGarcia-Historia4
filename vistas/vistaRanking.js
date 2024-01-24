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
				<div id="partidas" class="m-5 p-5 bg-dark">
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
                <div class="justify-content-center text-center mb-5 pb-5">
                <button id="partida" class="btn btn-success fs-1 mt-5">JUGAR</button>
                </div>
			</div>
    `,

    script: () => {
		document.querySelector("#boton").addEventListener("click", () => {
		  const textoBusqueda = document.querySelector("#buscador input").value;
		  const partidasCoincidentes = buscador(textoBusqueda);
	
		  // Limpiar el contenido actual del ranking
		  limpiarRanking();
	
		  // Actualizar el contenido del ranking con las partidas coincidentes
		  actualizarRanking(partidasCoincidentes);
		});
	
		document.querySelector("#partida").addEventListener("click", () => {
		  document.querySelector("main").innerHTML = juego.template;
		  juego.script();
		});
	  },
	};
	
	function limpiarRanking() {
	  const rankingTableBody = document.querySelector("#partidas tbody");
	  rankingTableBody.innerHTML = ""; // Limpiar el contenido actual del cuerpo de la tabla
	}
	
	function actualizarRanking(partidas) {
	  const rankingTableBody = document.querySelector("#partidas tbody");
	
	  partidas.forEach((partida, index) => {
		const row = document.createElement("tr");
		row.innerHTML = `
		  <td class="fs-2">${index + 1}</td>
		  <td><img src="img/${partida.nick.toLowerCase()}.jpg" alt="avatar" height="50"/></td>
		  <td>${partida.nick}</td>
		  <td>${partida.puntuacion}</td>
		`;
		rankingTableBody.appendChild(row);
	  });
	}