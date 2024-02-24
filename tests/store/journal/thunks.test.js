import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../src/store/journal/journalSlice';
import { startNewNote } from '../../../src/store/journal/thunks';
import { firebaseDb } from '../../../src/firebase/config';

describe('Testing on startNewNote', () => {

  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  test('should create a new empty note', async() => {

    const uid = 'Test123';
    getState.mockReturnValue({ auth: { uid }});

    await startNewNote()(dispatch, getState );

    expect(dispatch).toHaveBeenCalledWith( savingNewNote() );
    expect(dispatch).toHaveBeenCalledWith( addNewEmptyNote({
      body: '',
      title: '',
      id: expect.any( String ),
      date: expect.any( Number ),
      imageUrls: expect.any( Array ),
    }));
    expect(dispatch).toHaveBeenCalledWith( setActiveNote({
      body: '',
      title: '',
      id: expect.any( String ),
      date: expect.any( Number ),
      imageUrls: expect.any( Array ),
    }));
    
    const collectionRef = collection( firebaseDb, `${uid}/journal/notes`);
    const docs = await getDocs( collectionRef );

    const deletePromises = [];
    docs.forEach(doc => deletePromises.push( deleteDoc( doc.ref )));

    await Promise.all( deletePromises );
  })

})