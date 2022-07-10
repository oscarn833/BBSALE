/* Este código llama a la API de los productos, la cual a su vez se concatena
una variable llamada 'myInput'. Esta variable es la que funciona como filtro,
ya que es la que está conectada con la consulta de la base de datos.
*/
//API
const userURL = "https://bsale0.herokuapp.com/producto";
//FILTRO
const myInput = document.querySelector("#buscar").value;
try {
    fetch(`${userURL}/${myInput}`)
        .then((response) => response.json())
        .then((json) => {
            json.forEach((json) => {
                /*BODY: En este fragmento de codigo es donde se crea el patron que */
                const body = () => {
                    const buscar = document.querySelector("#buscar");
                    const boton = document.querySelector("#boton");
                    const texto = buscar.value.toLowerCase();
                    console.log(texto);
                    console.log();
                    let nm = json.name.toLowerCase();
                    const energetica = document.getElementById("energetica").value;
                    const dos = document.getElementById("energetica");

                    const list = document.getElementById("img-content");
                    let div = document.createElement("div");
                    let divPrecio = document.createElement("div");
                    const image = document.createElement("img");
                    const linea = document.createElement("hr");
                    const tituloTarjeta = document.createElement("h5");
                    const parrafo = document.createElement("p");
                    parrafo.classList.add("card-text");
                    tituloTarjeta.classList.add("card-title");
                    image.classList.add("card-img-top");
                    image.src = json["url_image"];
                    let price = json["price"];
                    let name = json["name"];
                    div.classList.add("card");
                    div.classList.add("row-lg-2");
                    div.classList.add("row-md-4");
                    div.classList.add("row-sm-12");
                    div.appendChild(image);
                    list.appendChild(div);
                    div.appendChild(linea);
                    div.appendChild(divPrecio);
                    divPrecio.classList.add("card-body");
                    tituloTarjeta.appendChild(document.createTextNode(name));
                    parrafo.appendChild(document.createTextNode("$ " + price));
                    divPrecio.appendChild(tituloTarjeta);
                    divPrecio.appendChild(parrafo);
                    boton.addEventListener("click", () => {
                        location.reload();
                    });
                };

                boton.addEventListener("click", body);
                body();
            });
        });
} catch (error) {
    console.log("ERROR", error);
}
