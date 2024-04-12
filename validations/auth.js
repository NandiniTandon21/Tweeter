import OktaAuth from '@okta/okta-auth-js';

const authClient = new OktaAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{yourClientId}',
  redirectUri: 'http://localhost:3000/callback',
  scopes: ['openid', 'profile', 'email'],
});

export const signIn = async (username, password) => {
  try {
    const transaction = await authClient.signInWithCredentials({
      username,
      password,
    });

    if (transaction.status === 'SUCCESS') {
      return transaction;
    }

    throw new Error('Sign in failed');
  } catch (error) {
    throw new Error('Sign in failed');
  }
};

export const signOut = () => {
  authClient.signOut();
};

export const getTokens = () => {
  return authClient.token.getWithRedirect({
    sessionToken: authClient.token.get('sessionToken'),
  });
};

export const handleAuthentication = (request) => {
  authClient.token.getWithRedirect({
    sessionToken: request.query.sessionToken,
    state: request.query.state,
  });
};

export const getUserInfo = async () => {
  try {
    const userInfo = await authClient.token.getUserInfo();
    return userInfo;
  } catch (error) {
    throw new Error('Failed to get user info');
  }
};