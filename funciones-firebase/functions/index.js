var functions = require('firebase-functions');

//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase, inetnto chorromil");
//  console.log("A la verga todo :v");
// });

exports.totalizarCarrito = functions.database
.ref('/USUARIOS/{Key}/carritoCompras')
.onWrite(event =>{
  console.log("Perros Todos >:v");
})