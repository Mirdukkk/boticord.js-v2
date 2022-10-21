import { Client as BotiCord } from '../src' // from 'boticord.js'
// const { BotiCord: Client } = require('boticord.js') if node.js

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 2
})

boticord.bots.info('sonata') // pass bot id or short code
  .then(data => {
    console.log(`Bot ${data.id} are ${data.information.status}!`, data)
  })
