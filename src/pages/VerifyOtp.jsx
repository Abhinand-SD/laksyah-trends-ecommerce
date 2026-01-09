import React, { useState, useEffect, useRef, useContext } from 'react';
import ShopContext from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const VerifyOtp = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [isResending, setIsResending] = useState(false);
    const inputRefs = useRef([]);
    const { backendUrl, navigate } = useContext(ShopContext);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Move to next input if current field is filled
        if (element.value !== '' && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        const data = e.clipboardData.getData('text').slice(0, 6);
        if (/^\d{6}$/.test(data)) {
            const newOtp = data.split('');
            setOtp(newOtp);
            inputRefs.current[5].focus();
        }
        e.preventDefault();
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        if (otpValue.length < 6) {
            toast.error('Please enter a 6-digit OTP');
            return;
        }

        try {
            // Placeholder for real API call
            // const response = await axios.post(backendUrl + '/api/user/verify-otp', { otp: otpValue });
            // if (response.data.success) {
            //     toast.success('Email verified successfully!');
            //     navigate('/login');
            // } else {
            //     toast.error(response.data.message);
            // }

            // For now, let's simulate success
            toast.success('Verification successful! You can now login.');
            navigate('/login');

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    const handleResend = async () => {
        if (timer > 0) return;

        setIsResending(true);
        try {
            // Placeholder for Resend API call
            // await axios.post(backendUrl + '/api/user/resend-otp');
            toast.info('New OTP sent to your email.');
            setTimer(60);
        } catch (error) {
            toast.error('Failed to resend OTP');
        } finally {
            setIsResending(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
            <div className="w-full max-w-md p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl">
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09a13.916 13.916 0 002.522-3.991m1.234-12.706a11.603 11.603 0 002.522 3.991m2.774 7.04a9.627 9.627 0 01-2.753 3.571m1.247-4.141a6.711 6.711 0 011.583-3.141 12.01 12.01 0 01-1.583-3.141m-6.426 6.282a6.711 6.711 0 01-1.583-3.141 12.01 12.01 0 011.583-3.141m0 0a6.709 6.709 0 011.87-2.48l.06-.051a12.01 12.01 0 012.396 3.088m0 0a6.709 6.709 0 01-1.87 2.48l-.06.051a12.01 12.01 0 01-2.396-3.088m0 0l-.592-.728c-.229-.281-.515-.558-.836-.83l-.707-.604" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Email</h1>
                    <p className="text-gray-500">We've sent a 6-digit verification code to your email address. Please enter it below.</p>
                </div>

                <form onSubmit={onSubmitHandler} className="space-y-8">
                    <div className="flex justify-center gap-3 sm:gap-4" onPaste={handlePaste}>
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={data}
                                ref={(el) => (inputRefs.current[index] = el)}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold text-gray-900 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 shadow-sm"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-colors duration-200 shadow-lg"
                    >
                        Verify Account
                    </button>

                    <div className="text-center space-y-4">
                        <p className="text-gray-500">
                            Didn't receive the code?{' '}
                            <button
                                type="button"
                                onClick={handleResend}
                                className={`font-semibold ${timer > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-700'}`}
                                disabled={timer > 0 || isResending}
                            >
                                {timer > 0 ? `Resend in ${timer}s` : isResending ? 'Resending...' : 'Resend Code'}
                            </button>
                        </p>
                        <button
                            onClick={() => navigate('/login')}
                            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp;
