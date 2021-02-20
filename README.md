# Locations NG
`npm package`

Locations NG provides data and functions to get all states, their cities and LGAs in Nigeria.

## Installation

Using `npm`:

```bash
$ npm install locations-ng
```
Note: add --save if you are using npm < 5.0.0

Using `yarn`:

```bash
$ yarn add locations-ng
```

## Usage

### Require the package
```js
const locationsNg = require('locations_ng')
```

### 1. GET all States, canonical
```js
locationsNg.state.all()
```
#### Response
```bash
[
  {:name=>"Abia", :capital=>"Umuahia"},
  {:name=>"Adamawa", :capital=>"Yola"},
  {:name=>"Akwa Ibom", :capital=>"Uyo"},
  ...
  ...
  {:name=>"Zamfara",:capital=>"Gusau"}
]
```

## Contributing
* Fork this repository and clone locally.
* Create an upstream remote and sync your local copy before you branch.
* Branch for each separate piece of work.
* Push to your origin repository.
* Create a new Pull Request, ensure that the "base fork" points to the correct repository and branch.


License
----

MIT
