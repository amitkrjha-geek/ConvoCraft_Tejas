class RedisServices{
    static createClient(){
        return new Redis(redisUrl);
    }
}