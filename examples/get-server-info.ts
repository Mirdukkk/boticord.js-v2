import { Client as BotiCord } from '../src' // from 'boticord.js'

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 1
})

boticord.servers.info('722424773233213460') // pass server id or short code
  .then(data => {
    console.log(`get ${data.information.name} server information!`, data)
  })
