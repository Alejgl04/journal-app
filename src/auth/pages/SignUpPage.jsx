import { useMemo, useState } from 'react';
import {  Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateUserCredentials } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ ( value ) => value.includes('@'), 'Email should have @'],
  password: [ ( value ) => value.length >= 1, 'Password should at least 6 characters'],
  displayName: [ ( value ) => value.length >= 1, 'Name is required'],

}

export const SignUpPage = () => {
  
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    isFormValid, displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, 
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return; 
    
    dispatch(startCreateUserCredentials(formState));
    
  }

  return (
    // Container
    <AuthLayout title="Sign up">
      <form      
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Full Name" 
              type="text" 
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Email" 
              type="email" 
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Password" 
              type="password" 
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid
              item 
              xs={12}
              display={ errorMessage ? '' : 'none' }
              >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button 
              disabled={isCheckingAuthentication}
                variant="contained" 
                fullWidth
                type="submit"
              >
                
                Submit
              </Button>
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}> Already a member? </Typography>
            <Link component={RouterLink} color='inherit' to="/auth/sign-in">
             Sign in here
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
