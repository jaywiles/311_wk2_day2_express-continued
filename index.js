const express = require("express");
const bodyParser = require("body-parser");
// * Between lines 2 and 3, require the data for from the following .js files:
//   * /data/contacts
//   * /data/vehicles
//   * /data/comments
//   * /data/products
const {comments} = require('./data/comments')
const {contacts} = require('./data/contacts')
const {products} = require('./data/products')
const {vehicles} = require('./data/vehicles')
const app = express();
// After "app" is defined, add the `express.static` middleware to express referencing the "public" folder
app.use(express.static('public'))

// create counters for comments, contacts, products, vehicles
// ! WHY AREN'T THESE WORKING?!?!?!?!? !
let commentCounter = comments.length;
let contactCounter = contacts.length;
let productCounter = products.length;
let vehicleCounter = vehicles.length;

const port = process.env.PORT || 4001;

// ###

// After "app" is defined, add the `express.static` middleware to express referencing the "public" folder
app.use('/', express.static('public'))

// ###

// After "express.static", add body parser middleware to express
app.use(bodyParser.json());

// ###

// * Add `app.get()` routes for the following:
// * `res.json()` the appropriate array from the "require" statements above

//   * "/comments"
app.get('/comments', (req, res) => {
    console.log('comments: ' + comments)
    res.json(comments)
})
//   * "/vehicles"
app.get('vehicles', (req, res) => {
    console.log('vehicles: ' + vehicles)
    res.json(vehicles)
})
//   * "/contacts"
app.get('contacts', (req, res) => {
    console.log('contacts: ' + contacts)
    res.json(contacts)
})
//   * "/products"
app.get('products', (req, res) => {
    console.log('products: ' + products)
    res.json(products)
})

// ###

// * Add `app.get()` routes for the following:
// * Make sure to include the path variable for id (above)
// * Use `req.params.id` to .find() the item from the appropriate array (by its _id)
//   * Example: `i._id == req.params.id`
// * `res.json()` the item found

//   * "/contacts/:id"
app.get('/contacts/:id', (req, res) => {
    let id = contacts.filter (x => x._id == req.params.id)
    res.json(id[0])
})
//   * "/vehicles/:id"
app.get('/vehicles/:id', (req, res) => {
    let id = vehicles.filter (x => x._id == req.params.id)
    res.json(id[0])
})
//   * "/comments/:id"
app.get('/comments/:id', (req, res) => {
    let id = comments.filter (x => x._id == req.params.id)
    res.json(id[0])
})
//   * "/products/:id"
app.get('/products/:id', (req, res) => {
    let id = products.filter (x => x._id == req.params.id)
    res.json(id[0])
})

// ###

// * Add `app.post()` routes for the following:

// * Add the information from the body to the appropriate array
//   * Figure out how to increment each `_id` by one and add this _id to "req.body"
//   * Add `postId: 1` to "req.body"
//   * Finally.. `<ARRAY>.push(req.body)`

//   * "/contacts"
app.post('/contacts', (req, res) => {
    let newContact = {
        "_id": contactCounter + 1,
        "name": "Barack Obama",
        "occupation": "Former President",
        "avatar": "https://vrcmods.com/imgs/P0x2ODWy3s4B.png"
    };
    contacts.push(newContact);
    res.json(contacts[contacts.length - 1])
})

//   * "/vehicles"
app.post('/vehicles', (req, res) => {
    let newVehicle = {
        "_id": vehicleCounter + 1,
        "imgUrl": "./featured-img-2.jpg",
        "year": "2017",
        "make": "CHEVROLET",
        "model": "Suburban",
        "price": "$42391.02",
        "km": 10229,
        "miles": 6837,
        "fuel": "Gas",
        "city": "Midland",
        "isNew": false
    };
    vehicles.push(newVehicle);
    res.json(vehicles[vehicles.length - 1])
})

//   * "/comments"
app.post('/comments', (req, res) => {
    let newComment = {
        "_id": commentCounter + 1,
        "body": "I can't wait to do this for a living!",
        "postId": 1
    };
    comments.push(newComment);
    res.json(comments[comments.length - 1])
})

//   * "/products"
app.post('/products', (req, res) => {
    let newProduct = {
        "_id": 1,
        "name": "Chuy's margarita",
        "description": "An awesome drink",
        "rating": 10,
        "imgUrl": "https://s3-media3.fl.yelpcdn.com/bphoto/fU_sJwbmerXc2Oae1wh-mg/o.jpg",
        "price": "$7.99",
        "category": "drink",
        "reviews": [{
          "description": "great",
          "rating": 2
        }, {
          "description": "awesome",
          "rating": 7
        }, {
          "description": "i'll be back for more",
          "rating": 4
        }]
    };
    products.push(newProduct);
    res.json(products[products.length - 1])
})







app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
