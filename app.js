
let array = [
  { id: 0, producto: "Zapatilla", precio: 2500,img:'https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw9ccb3276/original/90_DSU8094-1A02709_1U040_20_TrigrecaTrainers-TrigrecaSneakers-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit' },
  { id: 1, producto: "Remera", precio: 1000,img:'https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw5a169b4d/original/90_1006446-1A04415_1E090_10_SilverBaroqueT-Shirt-T-shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit' },
];
let contenedor = '';
total = 0;
historial = ""

card()
function card(){ array.forEach((element) => {

  contenedor += `
    <div class="bg-gray-200 border-2 border-gray-600 rounded-xl w-auto h-auto flex flex-col font-mono items-center">
        <ul flex>
            <li>${element.producto}</li>
            <li><img class="w-60 h-60" src="${element.img}" /></li>
            <li class='text-center'>$${element.precio}</li>
        </ul>
        <button onclick="agregarCarrito(${element.id})" class='botonBorrar bg-gray-700 text p-2 mb-2 rounded-xl text-white'>Agregar</button>
    </div>
    `;
    
});
}

document.getElementById("contenedor").innerHTML = contenedor;

function agregarCarrito(id) {
  historial += ` \n ${array[id].producto} $${array[id].precio}`
  total += array[id].precio
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Se agrego tu producto',
    showConfirmButton: false,
    timer: 900,
    background:'#fff',
  })
  console.log(total);
}

function carrito() {
  alert(historial)
  alert(`El total gastado es $${total}`)
}

function formulario() {
  let idNew = array.length 
  let productoNew = prompt('Ingrese nombre del producto que quiera agregar ')
  validar(productoNew,'ingresar un nombre de producto valido')
  let precioNew = parseInt(prompt('Ingresar precio del productor'))
  validar(precioNew,'ingrese un precio valido')
  let imgNew = prompt('ingrese url para la img del producto')

  array.push({ id: idNew, producto:productoNew, precio: precioNew,img:imgNew })
  contenedor = ''
  card()
  document.getElementById("contenedor").innerHTML = contenedor;
  console.log(array[idNew].producto)
}

function validar(variable, mensaje) {
  if (typeof variable === "number") {
    while (variable == null || /\D/.test(variable || variable == "")) {
      variable = parseInt(prompt(mensaje));
    }
  } else if (typeof variable === "string") {
    while (variable == null || !/\D/.test(variable) || variable == "") {
      variable = prompt(mensaje);
    }
  } else {
    return console.log(`Error en la validacion de ${variable}`);
  }
  return variable;
}
