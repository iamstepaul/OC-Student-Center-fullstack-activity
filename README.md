# OC-Student-Center fullstack-activity #

## Installation ##
Clone this repo, and run `npm install` from within the project directory.

## Using the app ##
Run `npm start` from within the project directory.

## Schema ##
```
mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
})
```
## Available API endpoints ##
The frontend app requires the following endpoints with the correct behavior for all tests to pass:
* GET `/api/products`

Returns all products as `{ products: Product[] }`
* GET: `/api/products/:id` 

Returns product for given ID as `{ product: Product }`
* POST: `/api/products`
Creates product in database.

Returns product created in database (including `_id` field) as `{ product: Product }`
* PUT: `/api/products/:id`


Returns `{ message: 'Modified!' }`
* DELETE: `/api/products/:id`

Deletes product with given ID.

Returns `{ message: 'Deleted!' }`
