import {  Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const SignUpPage = () => {
  return (
    // Container
    <AuthLayout title="Sign up">
      <form>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Full Name" type="text" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Email" type="email" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Password" type="password" fullWidth></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
