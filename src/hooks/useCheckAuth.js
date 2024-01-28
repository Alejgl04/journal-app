import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../store/auth';
import { useEffect } from 'react';

export const useCheckAuth = () => {
  const { status } = useSelector( state => state.auth );
  const distpach = useDispatch();
  
  useEffect(() => {
    
    onAuthStateChanged( firebaseAuth, async( user ) => {
      if ( !user ) return distpach( logout() );
      const {uid, email, displayName, photoURL } = user;
      distpach( login({uid, email, displayName, photoURL }) );
    });

  }, []);

  return { status }
}
