import { Client as BotiCord } from '../src' // from 'boticord.js'
// const { BotiCord: Client } = require('boticord.js') if node.js

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 2
})

boticord.servers.info('722424773233213460') // pass server id or short code
  .then(data => {
    console.log(`get ${data.information.name} server information!`, data)
  })
