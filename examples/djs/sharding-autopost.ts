import { Client as BotiCord, ShardedDjsAdapter } from '../../src' // from 'boticord.js'
// const { BotiCord: Client } = require('boticord.js') if node.js

const manager: any = {} // Discord.js SHARDING MANAGER, not the client

const adapter = new ShardedDjsAdapter(manager) // pass djs sharding manager to the adapter

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
