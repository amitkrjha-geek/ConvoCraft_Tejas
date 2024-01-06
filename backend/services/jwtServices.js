import jwt from 'jsonwebtoken';
// const refresh_secret =process.env.REFRESH_SECRET;
const refresh_secret="iamagoodboy"
const jwt_secret="whyareyounotagoodboy"
class JWTSERVICES{
    static sign(payload,expiry = 6000,secret = jwt_secret){
        return jwt.sign(payload,secret,{expiresIn: expiry});
    }

    static verify(refresh_token,secret=jwt_secret){
        return jwt.verify(refresh_token,secret)
    }

    
}
export default JWTSERVICES;