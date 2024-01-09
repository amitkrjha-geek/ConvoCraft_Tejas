import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();
// import REDIS_URL from 
const redisUrl = process.env.Redis_Url
//console.log(redisUrl);
class RedisServices{
    static createClient(){
        return new Redis("rediss://default:8a187adaba404d059ac71e6f37442ae6@usw1-sharing-alien-33586.upstash.io:33586");
    }
}
export default RedisServices;