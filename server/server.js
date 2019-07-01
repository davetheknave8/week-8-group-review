//requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser');

//uses
app.use(express.static( 'server/public' ));
app.use(express.urlencoded({extended: true}));

//For heroku, we can't control the port #
//Get if from the process running the server if it is set
//If not it will be set to 5000
const port = process.env.port || 5000;
let messages = [];

//spin up a server
app.listen( port, () =>{
    console.log( 'server is up on:', port );
})

//routes
app.get( '/messages', (req, res) => {
    console.log('in /messages GET');
    res.send( messages );
});

app.post( '/messages', ( req, res)=>{
    console.log( 'in /messages POST', req.body );
    messages.push( req.body );
    res.send( 201 );
});