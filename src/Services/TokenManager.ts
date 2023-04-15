import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { TokenPayLoad } from '../Interfaces/User/Users.Types'

dotenv.config()

export class TokenManager {

    private static SECRET_KEY = process.env.JWT_KEY || 'batata123';

    public createToken = (payload: TokenPayLoad): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }

    public getPayload = (token: string): TokenPayLoad | null => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload as TokenPayLoad

        } catch (error) {
            return null
        }
    }


    public verifyToken(token: string): TokenPayLoad | null {
        try {
            const payload = jwt.verify(token, TokenManager.SECRET_KEY) as TokenPayLoad;
            return payload;
        } catch (error) {
            return null;
        }
    }
}