import { Client as BotiCord } from '../src' // from 'boticord.js'
// const { BotiCord: Client } = require('boticord.js') if node.js

const boticord = new BotiCord({
  token: 'YOUR_BOTICORD_API_TOKEN',
  apiVersion: 2
})

boticord.users.comments('178404926869733376') // pass user id
  .then(comments => {
    console.log(`get ${comments.bots.length + comments.servers.length} user comments!`, comments)
  })
