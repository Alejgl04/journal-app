import { Navigate, Route, Routes } from 'react-router-dom'
import { SignInPage, SignUpPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="sign-in" element={ <SignInPage/> } />
      <Route path="sign-up" element={ <SignUpPage/> } />

      <Route path="/*" element={<Navigate to="/auth/sign-in"/>} /> 
    </Routes>
  )
}
