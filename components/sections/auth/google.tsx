import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { auth, getFirebaseClient } from '../../../lib/firebase/config';
import { IAlert, IUser } from '../../../types';

import GoogleIcon from '../../ui/icons/google';

interface IGoogleAuthComponent {
  signup?: boolean;
}

const GoogleAuthComponent: React.FC<IGoogleAuthComponent> = ({ signup }) => {
  const [alert, setAlert] = useState<IAlert | undefined>(undefined);
  const router = useRouter();

  const handleAuth = async () => {
    console.log('authenticating with google...');
    setAlert(undefined);

    try {
      const firebaseClient = await getFirebaseClient();
      const { provider, signInWithPopup, db, getDoc, doc } = firebaseClient;

      const result = await signInWithPopup(auth, provider);
      const docRef = doc(db, 'users', result.user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        const payload: IUser = {
          uid: result.user.uid,
          displayName: `${result.user.displayName}`,
          email: result.user.email,
          photoURL: `${result.user.photoURL}`,
          phone: '',
          createdAt: result.user.metadata.creationTime,
        };

        const authHelpers = await import(
          '../../../lib/helpers/auth/create-user'
        );

        authHelpers.createUser(docRef, payload);
      }

      console.log('authenticated sucessfully!!');

      setAlert({
        message: 'Signed in succesfully!',
        severity: 'success',
      });

      if (router.pathname.includes('/auth'))
        return router.push(
          `${router.query.returnTo ? router.query.returnTo : '/'}`
        );
    } catch (error: { code: string } | any) {
      console.log(error.code);

      let message = 'Something went wrong';

      switch (error.code) {
        case 'auth/network-request-failed':
          message = 'Please check your network connection.';
          break;
        default:
          message = 'Something went wrong. Please try again later!';
          break;
      }

      setAlert({
        message,
        severity: 'error',
      });

      setTimeout(() => {
        setAlert(undefined);
      }, 4000);
    }
  };

  return (
    <>
      {alert && (
        <p
          className={`text-center my-4 ${
            alert.severity === 'error' ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {alert.message}
        </p>
      )}

      <div
        onClick={async () => await handleAuth()}
        className="flex items-center space-x-2 bg-slate-50 justify-center p-2 rounded-lg border-2 border-slate-100 hover:bg-slate-200 cursor-pointer"
      >
        <GoogleIcon />
        <p className="body">Sign {signup ? 'up' : 'in'} with Google</p>
      </div>
    </>
  );
};

export default GoogleAuthComponent;
