import { Client as BotiCord } from '../src' // from 'boticord.js'

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 1
})

boticord.bots.postStats({ servers: 123, users: 12345, shards: 1 })
  .then(success => {
    console.log('posted bot stats! success?', success)
  })
