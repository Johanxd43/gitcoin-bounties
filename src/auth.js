import { UAuth } from 'uauth'; // Import the UAuth library

const uauth = new UAuth({
  clientID: 'YOUR_CLIENT_ID',
  redirectUri: 'YOUR_REDIRECT_URI',
  scope: 'openid wallet'
});

export const login = async () => {
  try {
    const user = await uauth.login();
    console.log('User logged in:', user);
    return user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await uauth.logout();
    console.log('User logged out');
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};