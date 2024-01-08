import Redis from 'ioredis';
// import REDIS_URL from 
const redisUrl = "redis://default:60fac3617d5649f2b78d698689348268@us1-sterling-poodle-38635.upstash.io:38635"
class RedisServices{
    static createClient(){
        return new Redis(redisUrl);
    }
}
export default RedisServices;