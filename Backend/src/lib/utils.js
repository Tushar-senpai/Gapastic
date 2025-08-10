import jwt from 'jsonwebtoken';

export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: '5d',}
    );

    res.cookie('jwt', token, {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        httpOnly: true,
        sameSite: 'strict', // Prevent CSRF attacks
 } );

 return token;
}
