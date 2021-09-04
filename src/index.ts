import post from './functions/bots/postBotStats';
import findBots from './functions/bots/findBots';
import findBot from './functions/bots/findBot';
import getBotComments from './functions/bots/getBotComments';
import { io as socket } from "socket.io-client";
import config from './config'

import { BotiCordError } from './struct/errors/BotiCordError';

import { DiscordJsAdapter } from './struct/adarters/DiscordJsAdapter';
import { DiscordJsShardedAdapter } from './struct/adarters/DiscordJsShardedAdapter';
import { AdapterInterface } from "./struct/adarters/AdapterInterface";

class BotiCordAPI {
    adapter: any;
    readonly token: string;
    private ws: any;

    constructor(adapter: AdapterInterface, options: { token: string, ws?: boolean }) {
        this.adapter = adapter;
        this.token = options.token;
        this.ws = options.ws || false;
        this._start();
    }

    postStats() {
        return post(this);
    }
    findBots(query: string) {
        return findBots(query);
    }
    findBot(query: string) {
        return findBot(query);
    }
    getBotComments(id: string) {
        return getBotComments(id);
    }

    _start() {
        if(!this.token) {
            throw new BotiCordError('You haven\'t provided BotiCord\'s API token!');
        }

        if(this.ws) {
            this.ws = socket(config.socketPath);

            this.ws.on('connection',() => {
                this.ws.emit('login', {
                    token: this.token
                });
            });
        }
    }
}

export { BotiCordAPI, BotiCordError, DiscordJsAdapter, DiscordJsShardedAdapter };
