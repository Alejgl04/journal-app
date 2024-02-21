export const initialState = {
  status: 'checking', // 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authenticatedState = {
  status: 'authenticated', // 'not-authenticated', 'authenticated'
  uid: 'abc123',
  email: 'test@gmail.com',
  displayName: 'test user',
  photoURL: 'https://image.jpg',
  errorMessage: null,
}

export const notAuthenticatedState = {
  status: 'not-authenticated', // 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const testUser = {
  uid: 'abc123',
  email: 'test@gmail.com',
  displayName: 'test user',
  photoURL: 'https://image.jpg',
  errorMessage: null,

}