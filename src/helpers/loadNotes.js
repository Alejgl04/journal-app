import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDb } from '../firebase/config';

export const loadNotes = async( uid = '' ) => {

  if ( !uid ) throw new Error('Id user does not exist');

  const collectionRef = collection( firebaseDb, `${ uid }/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];
  
  docs.forEach( document => {
    notes.push({id: document.id, ...document.data() });
  });

  return notes;

} 