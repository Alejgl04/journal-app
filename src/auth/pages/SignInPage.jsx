import { useMemo } from 'react';
import {  Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSignIn, startSignInWithEmail } from '../../store/auth';

export const SignInPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  const isAuthenticated = useMemo( () => status === 'checking', [status]);

  const { email, password, onInputChange } = useForm({
    email: 'alejandro@google.com',
    password: '123456'
  });


  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startSignInWithEmail({email, password}) )
  }

  const onGoogleSubmit = () => {
    console.log('Hello google');
    dispatch(startGoogleSignIn());
  }


  return (
    // Container
    <AuthLayout title="Sign in">
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Email" 
              type="email" 
              name="email" 
              value={email} 
              onChange={onInputChange} 
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Password" 
              type="password"
              name="password" 
              value={password} 
              onChange={onInputChange} 
              fullWidth
            ></TextField>
          </Grid>
          
          <Grid
              item 
              xs={12}
              sx={{mt:2}}
              display={ errorMessage ? '' : 'none' }
              >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth
                disabled={isAuthenticated}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ onGoogleSubmit }
                variant="contained" 
                fullWidth
                disabled={isAuthenticated}

              >
                <Google />
                <Typography sx={{ ml: 1 }}> Google </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>New member?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/sign-up">
              Sign up 
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
