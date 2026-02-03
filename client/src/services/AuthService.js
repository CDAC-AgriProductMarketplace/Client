
import api from './api';
import {jwtDecode} from 'jwt-decode';

export const login = (credentials) => {

  return api.post('/user/auth/login', {
    email: credentials.username,
    password: credentials.password
  });
};

export const register = async (formdata) => {
  console.log(formdata);
  
  const response = await api.post(
    '/user/auth/register-customer',
    {
      email: formdata.email,
      password: formdata.password,
      name: formdata.name,
      mobile: formdata.mobile,
      otpIsVerified: formdata.isOtpVerified

    }
  );

  return response;
};



export const getOtp=async(email)=>{    
    const response = await api.post(
        '/user/auth/generate-otp',
        {
          email: email
        }
      );

      return response;
}

export const verifyOtp=async(email,otp)=>{    
    const response = await api.post(
        '/user/auth/verify-otp',
        {
          email: email,
          otp: otp
        }
      );
     console.log(response);

      return response;
}


export const decodeJwt = (token) => {
  try {
    const decoded = jwtDecode(token);

    return {
      name: decoded.user.name,
      email: decoded.user.email,
      role: decoded.user.role
    };
  } catch (err) {
    console.error('JWT Decode error', err);
    return null;
  }
};
export const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);

    if (!decoded.exp) return true;

    const currentTime = Date.now() / 1000;

    return decoded.exp < currentTime; 

  } catch (error) {
    console.log(error);
    return true;
    
  }
};

