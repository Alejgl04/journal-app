import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, FacebookAuthProvider } from 'firebase/auth';
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoole = async() => {

  try {
    
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credentials =  GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }

  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage
    }
  }
}

export const signInWithFacebook = async() => {
  try {

    const result = await signInWithPopup(firebaseAuth, facebookProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }

  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage
    }
  }
}

export const registerUserWithCredentials = async({ email, password, displayName }) => {

  try {

    const response = await createUserWithEmailAndPassword(firebaseAuth, email, password );
    const { uid, photoURL } = response.user;

    await updateProfile( firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }

}

export const sigInWithEmail = async({email, password}) => {

  try {
    const response = await signInWithEmailAndPassword( firebaseAuth, email, password );
    const {uid, photoURL, displayName} = response.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
      email
    }
  } catch (error) {
    return { ok: false, errorMessage: error.message}
  }

}

export const logOutFirebase = async() => {
  return await firebaseAuth.signOut();
}