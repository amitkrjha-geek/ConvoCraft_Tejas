import Redis from 'ioredis';
// import REDIS_URL from 
const redisUrl = "rediss://MIM8RZXEtWkXMyVMiXdIfFurQrbbc5bY@redis-18436.c325.us-east-1-4.ec2.cloud.redislabs.com:18436"
class RedisServices{
    static createClient(){
        return new Redis(redisUrl);
    }
}
export default RedisServices;