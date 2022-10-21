import { Client as BotiCord } from '../src' // from 'boticord.js'
// const { BotiCord: Client } = require('boticord.js') if node.js

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 2
})

boticord.bots.postStats({ servers: 123, users: 12345, shards: 1 })
  .then(success => {
    console.log('posted bot stats! success?', success)
  })
