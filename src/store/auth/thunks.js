import { registerUserWithCredentials, signInWithGoole } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = ( email, password ) => {
  
  return async( dispatch ) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleSignIn = () => {
  
  return async( dispatch ) => {
    dispatch( checkingCredentials() );

    const result = await signInWithGoole();
    if ( !result.ok ) return dispatch( logout ( result.errorMessage ));

    dispatch( login( result ) )
  }
}

export const startCreateUserCredentials = ({ email, password, displayName }) => {

  return async( dispatch ) => {
    dispatch( checkingCredentials() );
    
    const {ok, uid, photoURL, errorMessage } = await registerUserWithCredentials({email, password, displayName });
    if ( !ok ) return dispatch( logout ({errorMessage }));

    dispatch( login({
      uid,
      photoURL,
      displayName,
      email,
    }));
  }

}

