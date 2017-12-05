var functions = require('firebase-functions');

//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase, inetnto chorromil");
//  console.log("A la verga todo :v");
// });

exports.totalizarCarrito = functions.database
.ref('/USUARIOS/{USUARIOSID}/carritoCompras')
.onWrite(event =>{ 
	// esto es para coger la infurmacion de todo el carrito de compras
	const carritoCompra = event.data.val()
	console.log(carritoCompra.vaciar.isVerified)
	// preguntamos por vaciar, para que no entre 2 veces
	if (carritoCompra.vaciar.isVerified == 'true') {
		console.log("se fue")
		return
	}
	// aqui modificamos el valor vaciar
	carritoCompra.vaciar.isVerified = true
	console.log("entro  >:v")


	var eventSnapshot = event.data; // Get player data
    var itemsSnapshot = eventSnapshot.child('productos'); // Get items data
    var totalSD = 0 ;

    itemsSnapshot.forEach(function(itemSnapshot) { // For each item
        //var itemKey = itemSnapshot.key; // Get item key
        var itemData = itemSnapshot.val(); // Get item data
        console.log("id: "+ itemData.id)
        console.log("precio: "+ itemData.precio)
        
        /* //pasar de "," a "." en float
        var values = itemData.precio.split(",")
		var v1 = parseFloat(values[0])
		var v2 = parseFloat(values[1])
		var value = parseFloat(itemData.precio.replace(",", "."));
		console.log("float: "+ value)
		*/	
		var value = parseFloat(itemData.precio)

		totalSD += value

		//aqui mas adelante hacer descuento

    });
    console.log("Total: " + totalSD)
	// cambiamos la informacion del DataBase por el nuevo carritoCompras
	
	carritoCompra.total = totalSD

	const promise = event.data.ref.set(carritoCompra)
	return promise
})