//requires
const express = require( 'express' );
const app = express();

//uses
app.use(express.static( 'server/public' ));

//global
const port = 5000;

//spin up a server
app.listen( port, () =>{
    console.log( 'server is up on:', port );
})

//routes