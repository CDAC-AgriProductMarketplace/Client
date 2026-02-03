import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import PasswordInput from './PasswordInput';
import { use, useState } from 'react';
import { getOtp, register, verifyOtp } from '../../../services/AuthService';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/slices/authSlices';

const RegisterForm = ({ setNotification }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    otp: '',
    password: ''
  });

  const validateForm = () => {
    if (!form.name.trim()) {
      setNotification({
        type: 'error',
        message: 'Please enter your name.',
      });
      return false;
    }
    if (!form.email.trim()) {
      setNotification({
        type: 'error',
        message: 'Please enter your email address.',
      });
      return false;
    }
    if (!form.mobile.trim() || form.mobile.trim().length !== 10) {
      setNotification({
        type: 'error',
        message: 'Please enter your mobile number.',
      });
      return false;
    }
    if (!form.password.trim() || form.password.trim().length < 6) {
      setNotification({
        type: 'error',
        message: 'Please enter a password.',
      });
      return false;
    }
    return true;
  };

  const handleGetOTP =async () => {

    try {
     
      // if (!form.mobile.trim() || form.mobile.trim().length !== 10) {
      //   setNotification({
      //     type: 'error',
      //     message: 'Please enter your mobile number.',
      //   });
      //   return;
      // }
      if (!form.email.trim()) {
        setNotification({
          type: 'error',
          message: 'Please enter your email address.',
        });
        return;
      }
      setIsLoading(true);
      setNotification(null);

       const response = await getOtp(form.email);


        setNotification({
          type: 'success',
          message:response.data.message || 'OTP sent to your email.',
        });
        setIsOtpVerified(response.data.data.otpIsVerified || false);
        setIsOtpSent(true);
        setIsLoading(false);
      
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Failed to send OTP. Please try again.',
      });
       setIsOtpSent(false);
      setIsLoading(false);
    }
  }

  const handleVerifyOTP = async () => {
    try {
      setIsLoading(true);
      setNotification(null);

      if (form.otp.trim().length !== 6) {
        throw new Error('Invalid OTP');
      }
      

      const response= await verifyOtp(form.email,form.otp);
      console.log(response);
      
      if(response.status!=200 && response.data.otpIsVerified!==true){
        throw new Error(response.data.message || 'OTP verification failed or Invalid OTP');
      }
        setIsOtpVerified(response.data.data.otpIsVerified || false);
        setNotification({
          type: 'success',
          message: 'OTP verified successfully.',
        });
        setIsLoading(false);
     
    } catch (error) {
      console.error(error);
      setIsOtpVerified(false);
      setNotification({
        type: 'error',
        message: error.response?.data?.message || 'OTP verification failed. Please try again.',
      });
      setIsLoading(false);
    }

  }
  const handleResendOTP = () => {
    handleGetOTP();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      handleGetOTP();
      return;
    }
    if (!validateForm()) return;


    setIsLoading(true);
    setNotification(null);
try {
    const resultAction = await dispatch(registerUser({...form, isOtpVerified}));
    if (registerUser.fulfilled.match(resultAction)) {
      setNotification({
        type: 'success',
        message: 'Registration successful!',
      });
      navigate("/");
      setIsLoading(false);

    } else {
      setNotification({
        type: 'error',
        message: resultAction.payload || 'Registration failed. Please try again.',
      });

      setIsLoading(false);
    }

      // navigate("/")
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setNotification({
        type: 'error',
        message: 'Registration failed. Please try again.',
      });
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput
        id="reg-name"
        label="Name"
        type="text"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Enter your name"
      />



      <FormInput
        id="reg-email"
        label="Email Address"
        type="email"
        disabled={isOtpVerified}
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="your@email.com"
      />
         {!isOtpVerified && (<>
        <div className="flex justify-between items-center mt-2 mb-4">
          <Link type="button" onClick={handleGetOTP} className=" w-30 h-10 flex justify-center items-center bg-green-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-md">Get OTP</Link>
          <Link type="button" onClick={handleResendOTP} className="text-[#01B763] d-flex justify-right">Resend OTP</Link>
        </div>
      </>)}
      <FormInput
        id="reg-otp"
        label="Enter OTP"
        type="text"
        disabled={isOtpVerified}
        value={form.otp}
        onChange={e => setForm({ ...form, otp: e.target.value })}
        placeholder="Enter the OTP sent to your email"
      />
      {!isOtpVerified && <button type="button" onClick={handleVerifyOTP} className="w-full flex justify-center bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-md">Verify OTP</button>}


      <FormInput
        id="reg-mobile"
        label="Mobile Number"
        disabled={isOtpVerified}
        type="tel"
        value={form.mobile}
        onChange={e => setForm({ ...form, mobile: e.target.value })}
        placeholder="Enter 10-digit mobile number"
      />
   
      <PasswordInput
        id="reg-password"
        label="Password"
        placeholder="Create a password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <p className="text-xs text-gray-600">
        Your personal data will be used as described in our{" "}
        <Link
          to="/privacy-policy"
          className="font-medium text-[#01B763] hover:underline"
        >
          privacy policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center bg-primary text-white 
                   font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 
                   transition-colors shadow-md disabled:bg-gray-400"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};
export default RegisterForm;