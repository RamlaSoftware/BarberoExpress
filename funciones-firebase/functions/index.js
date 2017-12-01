var functions = require('firebase-functions');

//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase, inetnto chorromil");
//  console.log("A la verga todo :v");
// });

exports.totalizarCarrito = functions.database
.ref('/USUARIOS/{USUARIOSID}/carritoCompras')
.onWrite(event =>{ 
	const carritoCompra = event.data.val()
	
	console.log(carritoCompra.vaciar.isVerified)

	if (carritoCompra.vaciar.isVerified == 'true') {
		console.log("se fue")
		return
	}
	carritoCompra.vaciar.isVerified = true
	console.log("entro  >:v")
	const promise = event.data.ref.set(carritoCompra)
	return promise
})