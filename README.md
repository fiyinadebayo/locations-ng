# Locations NG &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ceemion/locations-ng/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/locations-ng.svg?style=flat)](https://www.npmjs.com/package/locations-ng) [![<ORG_NAME>](https://circleci.com/gh/ceemion/locations-ng.svg?style=shield)](https://circleci.com/gh/ceemion/locations-ng/tree/master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ceemion/locations-ng#contributing)

Locations NG is a JavaScript library that provides functions to get all states, their cities and LGAs in Nigeria.

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
var locationsNg = require('locations-ng')
```

### 1. GET all States, canonical
```js
locationsNg.state.all()
```
#### Response
```bash
[
  {name: 'Abia', capital: 'Umuahia'},
  {name: 'Adamawa', capital: 'Yola'},
  {name: 'Akwa Ibom', capital: 'Uyo'},
  ...
  ...
  {name: 'Zamfara',capital: 'Gusau'}
]
```

### 2. GET detailed data of a State
```js
locationsNg.state.details('Lagos')
```
#### Response
```bash
{
  minLat: 6.3936419,
  name: 'Lagos',
  capital: 'Ikeja',
  latitude: 6.5243793,
  minLong: 3.0982732,
  maxLat: 6.7027984,
  longitude: 3.3792057,
  maxLong: 3.696727799999999,
  alias: 'lagos',
  area: 3345
  cities: ['Agege', 'Ikeja'],
  lgas: ['Agege', 'Ajeromi-Ifelodun', 'Alimosho',
          'Amuwo-Odofin', 'Badagry', 'Apapa', 'Epe',
          'Eti Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye',
          'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island',
          'Mushin', 'Lagos Mainland', 'Ojo', 'Oshodi-Isolo',
          'Shomolu', 'Surulere Lagos State']
}
```

### 3. GET State capital
```js
locationsNg.state.capital('Lagos')
```
#### Response
```bash
Ikeja
```

### 4. GET all Cities
```js
locationsNg.city.all()
```
#### Response
```bash
[
  {
    state: 'Akwa Ibom',
    alias: 'akwa_ibom',
    cities: ['Eket', 'Ikot Ekpene', 'Oron', 'Uyo']
  },
  {
    state: 'Bauchi',
    alias: 'bauchi',
    cities: ['Bauchi']
  },
  ...
  ...
  {
    state: 'Zamfara',
    alias: 'zamfara',
    cities: ['Gusau']
  }
]
```

### 5. GET Cities in a State
```js
locationsNg.city.cities('Akwa Ibom')
```
#### Response
```bash
['Eket', 'Ikot Ekpene', 'Oron', 'Uyo']
```

### 6. GET all LGAs
```js
locationsNg.lga.all()
```
#### Response
```bash
[
  {
    state: 'Adamawa',
    alias: 'adamawa',
    lgas: [
      'Demsa',
      'Fufure',
      'Ganye',
      'Gayuk',
      'Gombi',
      'Grie',
      'Hong',
      'Jada',
      'Larmurde',
      'Madagali',
      'Maiha',
      'Mayo Belwa',
      'Michika',
      'Mubi North',
      'Mubi South',
      'Numan',
      'Shelleng',
      'Song',
      'Toungo',
      'Yola North',
      'Yola South'
    ]
  },
  ...
  ...
  {
    state: 'Abia',
    alias: 'abia',
    lgas: [
      'Aba North',
      'Arochukwu',
      'Aba South',
      'Bende',
      'Isiala Ngwa North',
      'Ikwuano',
      'Isiala Ngwa South',
      'Isuikwuato',
      'Obi Ngwa',
      'Ohafia',
      'Osisioma',
      'Ugwunagbo',
      'Ukwa East',
      'Ukwa West',
      'Umuahia North',
      'Umuahia South',
      'Umu Nneochi'
    ]
  }
]
```

### 7. GET LGAs in a State
```js
locationsNg.lga.lgas('Lagos')
```
#### Response
```bash
['Agege', 'Ajeromi-Ifelodun', 'Alimosho',
 'Amuwo-Odofin', 'Badagry', 'Apapa', 'Epe',
 'Eti Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye',
 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island',
 'Mushin', 'Lagos Mainland', 'Ojo', 'Oshodi-Isolo',
 'Shomolu', 'Surulere Lagos State']
```

### 8. GET Localities for LGAs in a State (query with *state* and *LGA*)
```js
locationsNg.lga.localities('Abia', 'Aba North')
```
#### Response
```bash
['Ariaria', 'Asaokpoja', 'Asaokpulor',
 'Eziama  ward', 'Industrial', 'Ogbor 1',
 'Ogbor 2', 'Old GRA', 'Osusu 1', 'Osusu 2',
 'St. Eugene', 'Umuogor', 'Umuola', 'Uratta']
```

## Contributing
* Fork this repository and clone locally.
* Create an upstream remote and sync your local copy before you branch.
* Branch for each separate piece of work.
* Push to your origin repository.
* Create a new Pull Request, ensure that the 'base fork' points to the correct repository and branch.


License
----

MIT
