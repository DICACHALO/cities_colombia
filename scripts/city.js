// Ingresar un departamento y la aplicación responde con la capital una url para más información

let departamento = prompt("Ingresa un departamento");
departamento = departamento.toLowerCase();

while (
  departamento !== "amazonas" &&
  departamento !== "antioquia" &&
  departamento !== "arauca" &&
  departamento !== "atlantico" &&
  departamento !== "bolivar" &&
  departamento !== "boyaca" &&
  departamento !== "caldas" &&
  departamento !== "caqueta" &&
  departamento !== "casanare" &&
  departamento !== "cauca" &&
  departamento !== "cesar" &&
  departamento !== "choco" &&
  departamento !== "cordoba" &&
  departamento !== "cundinamarca" &&
  departamento !== "guainia" &&
  departamento !== "guaviare" &&
  departamento !== "huila" &&
  departamento !== "la guajira" &&
  departamento !== "magdalena" &&
  departamento !== "meta" &&
  departamento !== "nariño" &&
  departamento !== "norte de santander" &&
  departamento !== "putumayo" &&
  departamento !== "quindio" &&
  departamento !== "risaralda" &&
  departamento !== "san andres y providencia" &&
  departamento !== "santander" &&
  departamento !== "sucre" &&
  departamento !== "tolima" &&
  departamento !== "valle del cauca" &&
  departamento !== "vaupes" &&
  departamento !== "vichada" 
) {
  alert("Escribe un departamento que esté incluido en las opciones.");
    departamento = prompt("Ingresa un departamento");
    departamento = departamento.toLowerCase();
}

let capital = document.getElementById("capital");
let message = "La capital de " + departamento + " es: ";
let message2 = " Da clic aquí para más información: ";

if (departamento === "amazonas") {
  capital.innerHTML =
    message +
    " Leticia." +
    message2 +
    "<a href='http://www.leticia-amazonas.gov.co/'> Leticia </a>";
} else if (departamento === "antioquia") {
  capital.innerHTML =
    message +
    " Medellín." +
    message2 +
    "<a href='https://www.medellin.gov.co/irj/portal/medellin'> Medellín </a>";
} else if (departamento === "arauca") {
  capital.innerHTML =
    message +
    " Arauca." +
    message2 +
    "<a href='https://www.arauca-arauca.gov.co/Paginas/default.aspx'> Arauca </a>";
} else if (departamento === "atlantico") {
  capital.innerHTML =
    message +
    " Barranquilla." +
    message2 +
    "<a href='https://www.barranquilla.gov.co/'> Barranquilla </a>";
} else if (departamento === "bolivar") {
  capital.innerHTML =
    message +
    " Cartagena de Indias." +
    message2 +
    "<a href='https://www.cartagena.gov.co/'> Cartagena de Indias </a>";
} else if (departamento === "boyaca") {
  capital.innerHTML =
    message +
    " Tunja." +
    message2 +
    "<a href='https://www.tunja-boyaca.gov.co/'> Tunja </a>";
} else if (departamento === "caldas") {
  capital.innerHTML =
    message +
    " Manizales." +
    message2 +
    "<a href='https://manizales.gov.co/'> Manizalez </a>";
} else if (departamento === "caqueta") {
  capital.innerHTML =
    message +
    " Florencia." +
    message2 +
    "<a href='http://www.florencia-caqueta.gov.co/'> Florencia </a>";
} else if (departamento === "casanare") {
  capital.innerHTML =
    message +
    " Yopal." +
    message2 +
    "<a href='http://www.yopal-casanare.gov.co/'> Yopal </a>";
} else if (departamento === "cauca") {
  capital.innerHTML =
    message +
    " Popayán." +
    message2 +
    "<a href='http://www.popayan.gov.co/'> Popayán </a>";
} else if (departamento === "cesar") {
  capital.innerHTML =
    message +
    " Valledupar." +
    message2 +
    "<a href='http://valledupar-cesar.gov.co/Paginas/default.aspx'> Valledupar </a>";
} else if (departamento === "choco") {
  capital.innerHTML =
    message +
    " Quibdó." +
    message2 +
    "<a href='http://www.quibdo-choco.gov.co/Paginas/default.aspx'> Quibdó </a>";
} else if (departamento === "cordoba") {
  capital.innerHTML =
    message +
    " Montería." +
    message2 +
    "<a href='https://www.monteria.gov.co/'> Montería </a>";
} else if (departamento === "cundinamarca") {
  capital.innerHTML =
    message +
    " Bogotá." +
    message2 +
    "<a href='https://bogota.gov.co/'> Bogotá </a>";
} else if (departamento === "guainia") {
  capital.innerHTML =
    message +
    " Inírida." +
    message2 +
    "<a href='http://www.inirida-guainia.gov.co/Paginas/default.aspx'> Inírida </a>";
} else if (departamento === "guaviare") {
  capital.innerHTML =
    message +
    " San José del Guaviare." +
    message2 +
    "<a href='https://www.sanjosedelguaviare-guaviare.gov.co/Paginas/default.aspx'> San José del Guaviare </a>";
} else if (departamento === "huila") {
  capital.innerHTML =
    message +
    " Neiva" +
    message2 +
    "<a href='https://www.alcaldianeiva.gov.co/Paginas/Inicio.aspx'> Neiva </a>";
} else if (departamento === "la guajira") {
  capital.innerHTML =
    message +
    " Riohacha." +
    message2 +
    "<a href='https://www.riohacha-laguajira.gov.co/Paginas/Inicio.aspx'> Riohacha </a>";
} else if (departamento === "magdalena") {
  capital.innerHTML =
    message +
    " Santa Marta." +
    message2 +
    "<a href='https://www.santamarta.gov.co/'> Santa Marta </a>";
} else if (departamento === "meta") {
  capital.innerHTML =
    message +
    " Villavicencio." +
    message2 +
    "<a href='https://www.villavicencio.gov.co/'> Villavicencio </a>";
} else if (departamento === "nariño") {
  capital.innerHTML =
    message +
    " San Juan de Pasto." +
    message2 +
    "<a href='https://www.pasto.gov.co/'> San Juan de Pasto </a>";
} else if (departamento === "norte de santander") {
  capital.innerHTML =
    message +
    " San José de Cúcuta" +
    message2 +
    "<a href='http://www.cucuta-nortedesantander.gov.co/'> San José de Cúcuta </a>";
} else if (departamento === "putumayo") {
  capital.innerHTML =
    message +
    " Mocoa." +
    message2 +
    "<a href='https://www.mocoa-putumayo.gov.co/Paginas/default.aspx'> Mocoa </a>";
} else if (departamento === "quindio") {
  capital.innerHTML =
    message +
    " Armenia." +
    message2 +
    "<a href='https://www.armenia.gov.co/'> Armenia </a>";
} else if (departamento === "risaralda") {
  capital.innerHTML =
    message +
    " Pereira." +
    message2 +
    "<a href='http://www.pereira.gov.co/Paginas/Default.aspx'> Pereira </a>";
} else if (departamento === "san andres y providencia") {
  capital.innerHTML =
    message +
    " San Andrés." +
    message2 +
    "<a href='https://www.sanandres.gov.co/'> San Andrés </a>";
} else if (departamento === "santander") {
  capital.innerHTML =
    message +
    " Bucaramanga." +
    message2 +
    "<a href='https://www.bucaramanga.gov.co/Inicio/'> Bucaramanga </a>";
} else if (departamento === "sucre") {
  capital.innerHTML =
    message +
    " Sincelejo." +
    message2 +
    "<a href='https://www.alcaldiadesincelejo.gov.co/Paginas/default.aspx'> Sincelejo </a>";
} else if (departamento === "tolima") {
  capital.innerHTML =
    message +
    " Ibagué." +
    message2 +
    "<a href='https://www.ibague.gov.co'> Ibagué </a>";
} else if (departamento === "valle del cauca") {
  capital.innerHTML =
    message +
    " Cali." +
    message2 +
    "<a href='https://www.cali.gov.co/'> Cali </a>";
} else if (departamento === "vaupes") {
  capital.innerHTML =
    message +
    " Mitú." +
    message2 +
    "<a href='https://www.mitu-vaupes.gov.co/Paginas/default.aspx'> Mitú </a>";
} else if (departamento === "vichada") {
  capital.innerHTML =
    message +
    " Puerto Carreño." +
    message2 +
    "<a href='https://www.puertocarreno-vichada.gov.co/Paginas/default.aspx'> Puerto Carreño </a>";
}
