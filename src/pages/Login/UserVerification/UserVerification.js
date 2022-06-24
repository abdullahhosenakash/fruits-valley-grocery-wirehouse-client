import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserVerification = (user) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.emailVerified) {
            navigate('/verify-user', { replace: true });
        }
    }, []);
};

export default UserVerification;