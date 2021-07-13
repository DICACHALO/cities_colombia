// Ingresar un departamento y la aplicación responde con la capital una url para más información

let departamento = prompt("Ingresa un departamento");
departamento = departamento.toLowerCase();
let capital = document.getElementById("capital");
let message = "La capital de " + departamento + " es: ";
let message2 = " Da clic aquí para más información: "

if (departamento ==="amazonas") {
    capital.innerHTML = message + " Leticia." + message2 + "<a href='#'> Leticia </a>";
}
if (departamento ==="antioquia") {
    capital.innerHTML = message + " Medellín." + message2 + "<a href='#'> Medellín </a>";
}
if (departamento ==="arauca") {
    capital.innerHTML = message + " Arauca." + message2 + "<a href='#'> Arauca </a>";
}
if (departamento ==="atlantico") {
    capital.innerHTML = message + " Barranquilla." + message2 + "<a href='#'> Barranquilla </a>";
}
if (departamento ==="bolivar") {
    capital.innerHTML = message + " Cartagena de Indias." + message2 + "<a href='#'> Cartagena de Indias </a>";
}
if (departamento ==="boyaca") {
    capital.innerHTML = message + " Tunja." + message2 + "<a href='#'> Tunja </a>";
}
if (departamento ==="caldas") {
    capital.innerHTML = message + " Manizales." + message2 + "<a href='#'> Manizalez </a>";
}
if (departamento ==="caqueta") {
    capital.innerHTML = message + " Florencia." + message2 + "<a href='#'> Florencia </a>";
}
if (departamento ==="casanare") {
    capital.innerHTML = message + " Yopal." + message2 + "<a href='#'> Yopal </a>";
}
if (departamento ==="cauca") {
    capital.innerHTML = message + " Popayán." + message2 + "<a href='#'> Popayán </a>";
}
if (departamento ==="cesar") {
    capital.innerHTML = message + " Valledupar." + message2 + "<a href='#'> Valledupar </a>";
}
if (departamento ==="choco") {
    capital.innerHTML = message + " Quibdó." + message2 + "<a href='#'> Quibdó </a>";
}
if (departamento ==="cordoba") {
    capital.innerHTML = message + " Montería." + message2 + "<a href='#'> Montería </a>";
}
if (departamento ==="cundinamarca") {
    capital.innerHTML = message + " Bogotá." + message2 + "<a href='#'> Bogotá </a>";
}
if (departamento ==="guainia") {
    capital.innerHTML = message + " Inírida." + message2 + "<a href='#'> Inírida </a>";
}
if (departamento ==="guaviare") {
    capital.innerHTML = message + " San José del Guaviare." + message2 + "<a href='#'> San José del Guaviare </a>";
}
if (departamento ==="huila") {
    capital.innerHTML = message + " Neiva" + message2 + "<a href='#'> Neiva </a>";
}
if (departamento ==="la guajira") {
    capital.innerHTML = message + " Riohacha." + message2 + "<a href='#'> Riohacha </a>";
}
if (departamento ==="magdalena") {
    capital.innerHTML = message + " Santa Marta." + message2 + "<a href='#'> Santa Marta </a>";
}
if (departamento ==="meta") {
    capital.innerHTML = message + " Villavicencio." + message2 + "<a href='#'> Villavicencio </a>";
}
if (departamento ==="nariño") {
    capital.innerHTML = message + " San Juan de Pasto." + message2 + "<a href='#'> San Juan de Pasto </a>";
}
if (departamento ==="norte de santander") {
    capital.innerHTML = message + " San José de Cúcuta" + message2 + "<a href='#'> San José de Cúcuta </a>";
}
if (departamento ==="putumayo") {
    capital.innerHTML = message + " Mocoa." + message2 + "<a href='#'> Mocoa </a>";
}
if (departamento ==="quindio") {
    capital.innerHTML = message + " Armenia." + message2 + "<a href='#'> Armenia </a>";
}
if (departamento ==="risaralda") {
    capital.innerHTML = message + " Pereira." + message2 + "<a href='#'> Pereira </a>";
}
if (departamento ==="san andres y providencia") {
    capital.innerHTML = message + " San Andrés." + message2 + "<a href='#'> San Andrés </a>";
}
if (departamento ==="santander") {
    capital.innerHTML = message + " Bucaramanga." + message2 + "<a href='#'> Bucaramanga </a>";
}
if (departamento ==="sucre") {
    capital.innerHTML = message + " Sincelejo." + message2 + "<a href='#'> Sincelejo </a>";
}
if (departamento ==="tolima") {
    capital.innerHTML = message + " Ibagué." + message2 + "<a href='#'> Bucaramanga </a>";
}
if (departamento ==="valle del cauca") {
    capital.innerHTML = message + " Cali." + message2 + "<a href='#'> Cali </a>";
}

if (departamento ==="vaupes") {
    capital.innerHTML = message + " Mitú." + message2 + "<a href='#'> Mitú </a>";
}

if (departamento ==="vichada") {
    capital.innerHTML = message + " Puerto Carreño." + message2 + "<a href='#'> Puerto Carreño </a>";
}

else {
    alert("Escribe un departamento que esté incluido en las opciones");
}