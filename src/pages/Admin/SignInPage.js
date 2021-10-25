import React from 'react';
import SignInComponent from 'components/Admin/SignInComponent';
import SignInLayout from 'layout/Admin/SignInLayout';

const SignInPage = () => {
    return (
        <SignInLayout>
            <SignInComponent />
        </SignInLayout>
    );
};

export default SignInPage;
