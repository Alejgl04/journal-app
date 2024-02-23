import { signInWithGoole } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn } from '../../../src/store/auth/thunks';
import { testUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');

describe('Testing on AuthThunks', () => {
  const dispatch = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  test('should call the checkingAuthentication',async() => {

    await checkingAuthentication()( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
  });

  test('startGoogleSignIn should call checkingCredentials and do success login ', async() => {
    const loginData = { ok: true, ...testUser };

    await signInWithGoole.mockResolvedValue( loginData );
    // thunks
    await startGoogleSignIn()( dispatch );
    
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

  });

  test('startGoogleSignIn should call checkingCredentials and do logout with Error ', async() => {
    const loginData = { ok: false, errorMessage: 'Something went wrong' };

    await signInWithGoole.mockResolvedValue( loginData );
    // thunks
    await startGoogleSignIn()( dispatch );
    
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) );

  });

});