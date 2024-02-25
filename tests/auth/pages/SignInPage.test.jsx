import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { SignInPage } from '../../../src/auth/pages/SignInPage';
import { Provider } from 'react-redux';
import { authSlice } from '../../../src/store/auth';
import { MemoryRouter } from 'react-router-dom';


const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

describe('Testing on <SignInPage>', () => {

  test('should show the component', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignInPage/>
        </MemoryRouter>
      </Provider>
    );

    expect( screen.getAllByText('Sign In').length ).toBeGreaterThanOrEqual(1);

  });

})