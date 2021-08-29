import { Client } from 'discord.js';
import { AdapterInterface } from "./AdapterInterface";

export class DiscordJsShardedAdapter implements AdapterInterface {
    constructor(client: Client) {
        this.client = client;
    }

    getGuilds() {
        return this.client.shard.fetchClientValues(`guilds.cache.size`)
            .then((guilds: number[]) => guilds.reduce((a, b) => a + b, 0));
    }

    getUsers() {
        return this.client.shard.fetchClientValues(`users.cache.size`)
            .then((users: number[]) => users.reduce((a, b) => a + b, 0));
    }

    getShards() {
        return this.client.shard.fetchClientValues(`ws.ping`)
            .then((r: number[]) => r.length);
    }

    client: any;
}