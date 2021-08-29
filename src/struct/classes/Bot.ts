import { BotInterface } from '../interfaces/BotInterface';

export class Bot implements BotInterface {
    constructor(bot: any) {
        this.id = bot.id;
        this.shortCode = bot.shortCode;
        this.links = bot.links;
        this.information = {
            bumps: bot.information.bumps,
            added: bot.information.added,
            prefix: bot.information.prefix,
            permissions: bot.information.permissions,
            tags: bot.information.tags,
            developers: bot.information.developers,
            links: {
                discord: bot.information.links.discord,
                github: bot.information.links.github,
                site: bot.information.links.site
            },
            library: bot.information.library,
            description: {
                short: bot.information.description.short,
                long: bot.information.description.long
            },
            badge: bot.information.badge,
            stats: {
                servers: bot.information.stats.servers,
                shards: bot.information.stats.shards,
                users: bot.information.stats.users
            },
            status: bot.information.status
        }
    }

    id: string;
    information: { bumps: number; added: number; prefix: string; permissions: number; tags: string[] | []; developers: string[]; links: { discord: string | null; github: string | null; site: string | null }; library: string | null; description: { short: string; long: string }; badge: number; stats: { servers: number; shards: number; users: number }; status: string };
    links: string[];
    shortCode: string | null;
}
