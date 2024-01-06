import jwt from 'jsonwebtoken';
class JWTSERVICES{
    static sign(payload,expiry = 6000,secret = jwt_secret){
        return jwt.sign(payload,secret,{expiresIn: expiry});
    }

    static verify(refresh_token,secret=jwt_secret){
        return jwt.verify(refresh_token,secret)
    }

    
}
export default JWTSERVICES;