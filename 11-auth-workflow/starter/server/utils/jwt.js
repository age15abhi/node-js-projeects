const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET );
  return token;
};

const isTokenValid = ( token ) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user , refreshToken }) => {
  const AccessTokenJWT = createJWT({ payload: {user} });
  const RefreshTokenJWT = createJWT({ payload: {user , refreshToken} });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('accessToken', AccessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    maxAge:1000,
  });
  res.cookie('refreshToken', RefreshTokenJWT, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
 
  });
};

// Attach single cookie to the response
// const attachCookiesToResponse = ({ res, user }) => {
//   const token = createJWT({ payload: user });

//   const oneDay = 1000 * 60 * 60 * 24;

//   res.cookie('token', token, {
//     httpOnly: true,
//     expires: new Date(Date.now() + oneDay),
//     secure: process.env.NODE_ENV === 'production',
//     signed: true,
//   });
// };

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
};
