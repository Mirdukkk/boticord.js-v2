import { Client } from 'discord.js';
import { AdapterInterface } from "./AdapterInterface";

export class DiscordJsAdapter implements AdapterInterface {
    constructor(client: Client) {
        this.client = client;
    }

    getGuilds() {
        const guilds: number = this.client.guilds.cache.size;
        return guilds;
    }

    getUsers() {
        const users: number = this.client.users.cache.size;
        return users;
    }

    getShards() {
        return 0;
    }

    client: any;
}