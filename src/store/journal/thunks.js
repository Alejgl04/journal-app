import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDb } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';
import { loadNotes } from '../../helpers';

export const startNewNote = () => {

  return async( dispatch, getState ) => {
    dispatch( savingNewNote());

    const { uid } = getState().auth;
    
    const newNote = {
      title: '',
      body: '',
      date: 123123
    }

    const newDoc = doc( collection( firebaseDb, `${uid}/journal/notes` ));
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;

    //!! dispatch
    dispatch( addNewEmptyNote( newNote ));
    dispatch( setActiveNote( newNote ));
  }  
}

export const startLoadingNotes = () => {

  return async( dispatch, getState ) => {
    const { uid } = getState().auth;

    const notes = await loadNotes( uid );
    dispatch( setNotes(notes));
  }
}