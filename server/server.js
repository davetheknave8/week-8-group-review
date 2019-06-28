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
app.get( '/messages', (req, res) => {
    console.log('in /messages GET');
    res.send('meow');
});

app.post( '/messages', ( req, res)=>{
    console.log( 'in /messages POST', req.body );
    res.send( 'ribbet' );
});