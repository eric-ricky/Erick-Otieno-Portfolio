import { useRouter } from 'next/router';
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuthContext } from '../../../lib/context/auth-context';
import { auth } from '../../../lib/firebase/config';

interface IAuthRouteGuard extends ComponentPropsWithoutRef<'div'> {}

const AuthRouteGuard: React.FC<IAuthRouteGuard> = ({ children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [user, loading] = useAuthState(auth);
  const userCtx = useAuthContext();

  const hideContent = () => setAuthorized(false);

  useEffect(() => {
    if (loading) return;

    const checkAuth = (url: string) => {
      const privatePaths = ['/user', '/sellers-dashboard'];

      const path = url.split('?')[0];

      if (
        privatePaths.some((pth) => path.includes(pth)) &&
        !userCtx?.user.uid &&
        !user?.uid
      ) {
        console.log('Not authenticatedd');
        setAuthorized(false);
        router.push({
          pathname: '/auth/signin',
          query: { returnTo: router.asPath },
        });
        return;
      }

      if (!!user?.uid && userCtx?.user.uid && path.includes('/auth'))
        router.push(`${router.query.returnTo ? router.query.returnTo : '/'}`);

      setAuthorized(true);
    };

    checkAuth(router.asPath);

    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', checkAuth);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', checkAuth);
    };
  }, [
    user?.uid,
    router.asPath,
    router.events,
    router,
    loading,
    userCtx?.user.uid,
  ]);

  return (
    <>
      {authorized ? (
        children
      ) : (
        <div className="w-full h-screen grid place-items-center bg-brandlight">
          <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-4 border-primarydark rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthRouteGuard;
