export interface BotInterface {
    id: string,
    shortCode: string | null,
    links: string[],
    information: {
        bumps: number,
        added: number,
        prefix: string,
        permissions: number,
        tags: string[] | [],
        developers: string[],
        links: {
            discord: string | null,
            github: string | null,
            site: string | null
        },
        library: string | null,
        description: {
            short: string,
            long: string
        },
        badge: number,
        stats: {
            servers: number,
            shards: number,
            users: number
        },
        status: string
    }
}