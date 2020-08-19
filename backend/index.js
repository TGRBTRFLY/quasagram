/*
    dependencies
 */
const express = require( 'express' )
const admin = require( 'firebase-admin' );
const serviceAccount = require( './path/to/serviceAccountKey.json' );
admin.initializeApp( {
    credential: admin.credential.cert( serviceAccount )
} );
const db = admin.firestore();
/*
    config - express
 */
const app = express()
/*
    config - firebase
 */
const serviceAccount = require( './serviceAccountKey.json' );
admin.initializeApp( {
    credential: admin.credential.cert( serviceAccount )
} );
const db = admin.firestore();
/*
    endpoint - posts
 */
app.get( '/posts', (request, response) => {
    let posts = [
        {
            caption: 'Kolob',
            location: 'Kingdom'
        },
        {
            caption: 'London Eye',
            location: 'London'
        }
    ]
    response.send( posts )
} )
/*
    listen
 */
app.listen( process.env.PORT || 3000 )