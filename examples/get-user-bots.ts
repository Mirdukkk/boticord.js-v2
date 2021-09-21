import { Client as BotiCord } from '../src' // from 'boticord.js'

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 1
})

boticord.users.bots('178404926869733376') // pass user id
  .then(bots => {
    console.log(`get ${bots.length} user bots!`, bots)
  })
