import { Client as BotiCord } from '../src' // from 'boticord.js'
// const { BotiCord: Client } = require('boticord.js') if node.js

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 2
})

boticord.users.profile('178404926869733376') // pass user id
  .then(profile => {
    console.log('get profile!', profile)
  })
