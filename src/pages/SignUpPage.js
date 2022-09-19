import SignUpForm from 'container/SignUpForm';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => (
  <div className="bg-primary bg-opacity-20 p-16">
    <div className="px-20 py-16 bg-white m-auto" style={{ maxWidth: '800px' }}>
      <h1 className="text-4xl mb-14">Sign Up</h1>
      <SignUpForm />
      <p className="mt-24 text-center">
        Already have an account ?
        <Link
          to="/signin"
          className="ml-2 text-blue-600 font-semibold text-lg hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  </div>
);

export default SignUpPage;
