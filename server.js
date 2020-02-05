 const express = require ('express');
 const app = express();

const  mockUserData = [
{nombre : ' Mark ' },
{nombre : ' Jill ' }
]
aplicación . get ( ' / users ' , function ( req , res ) {
 	 res . json ({
 	 	el éxito :  verdadero ,
 	 	mensaje :  ' consiguió usuarios con éxito. ¡Agradable! ' ,
 	 	usuarios : mockUserData
 	})
})

 app.listen(8000,function(){
console.log("server is running")
})
