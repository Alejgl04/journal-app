import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import { authenticatedState, initialState, testUser } from '../../fixtures/authFixtures';


describe('Testing on authSlice', () => {

  test('should return the initial state and named "auth" ', () => {

    const state = authSlice.reducer( initialState, {});
    
    expect( state ).toEqual( initialState );
    expect( authSlice.name ).toBe('auth');

  });

  test('should make the authentication', () => {

    const state = authSlice.reducer( initialState, login( testUser ));

    expect(state).toEqual({
      status: 'authenticated', // 'not-authenticated', 'authenticated'
      uid: testUser.uid,
      email: testUser.email,
      displayName: testUser.displayName,
      photoURL: testUser.photoURL,
      errorMessage: null,
    });
  });

  test('should make the logout without parameters', () => {

    const state = authSlice.reducer( authenticatedState, logout());
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined
    });

  });
  test('should make the logout and show error message', () => {
    
    const errorMessage = 'Credentials are not valid'
    const state = authSlice.reducer( authenticatedState, logout({errorMessage}));
    expect( state ).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: 'Credentials are not valid'
    });

  });

  test('should change the state to checking', () => {

    const state = authSlice.reducer( authenticatedState, checkingCredentials() );

    expect( state.status ).toBe('checking');

  });

});