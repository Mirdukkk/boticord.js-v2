import { Client as BotiCord, DdooAdapter } from '../../src' // from 'boticord.js'
// const { BotiCord: Client } = require('boticord.js') if node.js

const client: any = {} // Discordoo client

const adapter = new DdooAdapter(client) // pass ddoo client to adapter

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 2
}, adapter)

boticord.botStatsAutopost()
  .then(success => {
    if (success) console.log('autopost started successfully!')
    else console.log('autopost already running')
  })
  .catch(error => {
    console.log('whoops, some error occurred!', error)
  })

// stop autoposting when it is no longer needed
// boticord.shutdownAutopost()
