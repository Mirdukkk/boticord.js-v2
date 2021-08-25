'use strict'

class BotiCordAPI {
    options: {
        token: string,
        ws?: boolean
    }

    constructor(client, options) {
        this.client = client;
        this.token = options.token;
        this.ws = options.ws || false;
        this._start();

        this.postBotStats = require('./functions/postBotStats');
    }

    _start() {
        if(!this.token) {
            throw new Error('You haven\'t provided BotiCord\'s API token!');
        }

        if(this.ws) {
            this.ws = require('socket.io-client')('wss://socket.boticord.top');

            this.ws.emit('login', {
                token: this.token
            })
        }
    }
}

module.exports = { BotiCordAPI };