import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../shared/PageTitle/PageTitle';

const VerifyUser = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const from = location?.state?.from?.pathname || '/';
    const handleUserVerify = () => {
        if (user?.emailVerified) {
            navigate(from, { replace: true });
        }
        else {
            alert('Email not verified!');
        }
    }
    const handleEmailVerificationButton = async () => {
        await sendEmailVerification();
        toast("Email Verification Sent");
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <PageTitle title="Verify User"></PageTitle>
            <div>
                <h5 className='display-6'>Email verification sent!</h5>
                <p className='fs-3'>Please check your mail inbox and verify email.</p>
                <p className='fs-4'>Already verified? Relode the page and then<button className='text-primary border-0 bg-white' onClick={handleUserVerify}>Click Here</button></p>
                <p className='fs-4'>Didn't get verification email?<button className='text-primary border-0 bg-white' onClick={handleEmailVerificationButton}>Resend Now</button></p>
            </div>
        </div >
    );
};

export default VerifyUser;