export interface AdapterInterface {
    client: {} | any,
    getGuilds(): number,
    getUsers(): number,
    getShards(): number
}