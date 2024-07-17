import React, { useEffect } from 'react';
import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';

const TestAuth = () => {
  useEffect(() => {
    console.log('Amplify:', Amplify);
    console.log('Auth:', Auth);

    if (Auth && Auth.currentAuthenticatedUser) {
      Auth.currentAuthenticatedUser()
        .then(user => console.log('Authenticated user:', user))
        .catch(error => console.error('Error fetching authenticated user:', error));
    } else {
      console.error('Auth is not defined or currentAuthenticatedUser is not a function');
    }
  }, []);

  return <div>Check the console for Auth status</div>;
};

export default TestAuth;
